import React, { useState } from 'react';
import { Form, Input, Button, InputWrapper, Label } from './ContactForm.styled';

export const ContactForm = ({ onSubmit, invoice }) => {
  const [number, setNumber] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ number });
    // console.log(invoice);
    reset();
  };

  const handleInputChange = e => {
    const { value } = e.currentTarget;
      setNumber(value);
  };

  const reset = () => {
    setNumber('');
  };

  return (
    <>
    <Form onSubmit={handleFormSubmit}>
      <InputWrapper>
        <Label>№ TTN</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          placeholder="Must contain 14 digits"
          pattern="\d{14}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrapper>
      <Button type="submit">Get status TTN</Button>

    </Form>
      </>
  );
};
