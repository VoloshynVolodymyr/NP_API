import { ContactForm } from './ContactForm/ContactForm';
import { TTNList } from './TTNList/TTNList';
import { TTNDetails } from './TTNDetails/TTNDetails';
import React, { useState, useEffect } from 'react';
import { CommonWrapper } from './App.styled';
import {getParcelData} from '../services/api/TTH'

export const App = () => {
  const [activeTTN, setActiveTTN] = useState(20450668892412);
  const [invoice, setInvoice] = useState(JSON.parse(localStorage.getItem('invoice')) || [{}],
  );

  const setActive = (name) => {
    setActiveTTN(name);
  }

  // useEffect(()=>{
  //   fetchParcelData(activeTTN)
  // }, [activeTTN])


  useEffect(() => {
        localStorage.setItem('invoice', JSON.stringify(invoice));
        if (invoice.length===10) {invoice.pop()}
        // console.log(invoice);
  }, [invoice]);

  const addTTN = invoice => {
    setInvoice(prevValue => [invoice, ...prevValue]);
  };

  // const fetchParcelData = async (activeTTN) => {
  //   try {
  //     const parcelDetails = await getParcelData(activeTTN);
  //     const {Number, Status, WarehouseSender, WarehouseRecipient, ScheduledDeliveryDate} = parcelDetails[0]
  //     console.log(Number, Status, WarehouseSender, WarehouseRecipient, ScheduledDeliveryDate);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchParcelData(20450668892412)
  
 

  return (
    <CommonWrapper>
      <ContactForm onSubmit={invoice => addTTN(invoice)} />
    {/* //   <PhonebookWrapper>
    //     <h1>Phonebook</h1>
        // <ContactForm onSubmit={contact => addContact(contact)} />
    //   </PhonebookWrapper>

      // <ContactsWrapper>
        <h2>Contacts</h2> */}
        {/* <Filter handleChange={handleChange} filter={filter} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </ContactsWrapper> */}
            <TTNList invoice={invoice} onClick={setActive}/>
            <TTNDetails activeTTN={activeTTN}/>
      
    </CommonWrapper>
  );
};
