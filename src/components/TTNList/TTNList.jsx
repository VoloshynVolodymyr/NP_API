import React from 'react';
import { nanoid } from 'nanoid';
import { List } from './TTNList.styled';

export const TTNList = ({ invoice, onClick }) => {

  const setActive = (e) => {
    onClick(e.target.value)
    // console.log(e.target.value);
  };

  return invoice.map(elem => (
    <input defaultValue={elem.number} onClick={setActive} key={nanoid()}>
     
    </input>
  ));
};
