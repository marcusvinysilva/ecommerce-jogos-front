import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { cpf } from 'cpf-cnpj-validator';
import styled from 'styled-components'

const Form = styled.form`
  width: 70%;
  padding: 30px 0;
  background: rgba(20, 40, 40, 0.8);
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const UserDivControl = styled.div`
  label {
    color: antiquewhite;
    border-radius: 3rem;
    display: block;
    margin-right: 20px;
    /* align-content: center; */
  }

  input {
    margin: 15px 0;
    font-size: 16px;
    padding: 10px;
    width: 250px;
    border: 1px solid #9300ff;
    border-top: none;
    border-left: none;
    border-right: none;
    background: rgba(20, 20, 20, 0.2);
    color: white;
    outline: none;
  }
`;


export const SignupForm = () => {
  // Yup custom method the check if cpf is valid
  Yup.addMethod(Yup.string, 'checkCpf', function (errorMessage) {
    return this.test(`test-cpf-number`, errorMessage, function (value) {
      const { path, createError } = this;

      return cpf.isValid(value) || createError({ path, message: errorMessage });
    });
  });

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        cpf: '',
        address: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Name must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(15, 'Name must be 15 characters or less')
          .required('Required'),
        cpf: Yup.string().checkCpf('Invalid cpf number').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
            'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
          )
          .required('Required'),
        passwordConfirmation: Yup.string().test(
          'match',
          'Passwords must match',
          function (passwordConfirmation) {
            return passwordConfirmation === this.parent.password;
          }
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <UserDivControl>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </UserDivControl>

          <UserDivControl>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" />
          </UserDivControl>

          <UserDivControl>
            <label htmlFor="cpf">CPF</label>
            <Field type="text" name="cpf" />
            <ErrorMessage name="cpf" />
          </UserDivControl>

          <UserDivControl>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </UserDivControl>

          <UserDivControl>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </UserDivControl>

          <UserDivControl>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field type="password" name="passwordConfirmation" />
            <ErrorMessage name="passwordConfirmation" />
          </UserDivControl>

          <button type="submit">SignUP</button>
        </Form>
      )}
    </Formik>
  );
};
