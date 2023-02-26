import { ContactForm } from './ContactForm/ContactForm';
import React, { useState, useEffect } from 'react';
import { CommonWrapper } from './App.styled';
import {getParcelData} from '../services/api/TTH'

export const App = () => {
  const [invoice, setInvoice] = useState(JSON.parse(localStorage.getItem('state')) || {},
  );


  useEffect(() => {
        localStorage.setItem('invoice', JSON.stringify(invoice));
  }, [invoice]);

  const addTTN = invoice => {
    setInvoice(prevValue => [...prevValue, invoice]);
  };

  // const handleDelete = deleteId => {
  //   setContacts(prevValue => prevValue.filter(({ id }) => id !== deleteId));
  // };

  // const handleChange = e => {
  //   const { value } = e.currentTarget;
  //   setInvoice(value);
  // };

  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredContacts = filterContacts();

  const fetchParcelData = async () => {
    try {
      const warehousesTypes = await getParcelData();
      const {Number, Status, WarehouseSender, WarehouseRecipient, ScheduledDeliveryDate} = warehousesTypes[0]
      console.log(Number, Status, WarehouseSender, WarehouseRecipient, ScheduledDeliveryDate);
    } catch (error) {
      console.log(error);
    }
  };
  fetchParcelData()
  
 

  return (
    <CommonWrapper>
      <ContactForm onSubmit={invoice => addTTN(invoice)}/>
    {/* //   <PhonebookWrapper>
    //     <h1>Phonebook</h1>
        // <ContactForm onSubmit={contact => addContact(contact)} />
    //   </PhonebookWrapper>

      // <ContactsWrapper>
        <h2>Contacts</h2> */}
        {/* <Filter handleChange={handleChange} filter={filter} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </ContactsWrapper> */}
    </CommonWrapper>
  );
};
