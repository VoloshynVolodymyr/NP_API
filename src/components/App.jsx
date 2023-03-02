import { ContactForm } from './ContactForm/ContactForm';
import { TTNList } from './TTNList/TTNList';
import { TTNDetails } from './TTNDetails/TTNDetails';
import React, { useState, useEffect } from 'react';
import { CommonWrapper } from './App.styled';

export const App = () => {
  const [activeTTN, setActiveTTN] = useState(20450668892412);
  const [invoice, setInvoice] = useState(JSON.parse(localStorage.getItem('invoice')) || [],
  );

  const setActive = (name) => {
    setActiveTTN(name);
  }

  useEffect(() => {
        localStorage.setItem('invoice', JSON.stringify(invoice));
        if (invoice.length===5) {invoice.pop()}
  }, [invoice]);

  const addTTN = invoice => {
    setInvoice(prevValue => [invoice, ...prevValue]);
    setActiveTTN(invoice);
  };

  const updateStorage = (arr) => {
    localStorage.removeItem('invoice')
    localStorage.setItem('invoice', JSON.stringify(arr));
    setInvoice((JSON.parse(localStorage.getItem('invoice'))) );
  }

  return (
    <CommonWrapper >
      <ContactForm onSubmit={invoice => addTTN(invoice)} />
      <TTNList invoice={invoice} onClick={setActive} onClick2={updateStorage}/>
      <TTNDetails activeTTN={activeTTN}/>
    </CommonWrapper>
  );
};
