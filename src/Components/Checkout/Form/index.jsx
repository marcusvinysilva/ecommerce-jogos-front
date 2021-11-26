import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { cpf } from 'cpf-cnpj-validator';
import { Form, UserDivControl } from './style';

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
            <span>
              <Field type="text" name="name" />
            </span>
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
