import React from 'react';
import { SignupForm } from './Form';
import { DivSignup } from './style';
import { CheckoutCartItems } from './Items/CheckoutItems';

export default function CheckoutItems() {
  return (
    <DivSignup>
      <SignupForm />

      <CheckoutCartItems />
    </DivSignup>
  );
}
