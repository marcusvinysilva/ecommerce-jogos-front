import React from 'react';
import { SignupForm } from './Form';
import styled from 'styled-components';

const Divsignup = styled.div`
  display: flex;
  justify-content: center;
`;


export default function CheckoutItems() {
  return (
    <Divsignup>
      <SignupForm />
    </Divsignup>
  );
}
