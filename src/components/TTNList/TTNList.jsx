import React from 'react';
import { nanoid } from 'nanoid';
import { Input } from './TTNList.styled';

export const TTNList = ({ invoice, onClick }) => {

  const setActive = (e) => {
    onClick(e.target.value)
  };
//   invoice.pop()
  return invoice.map(elem => (
    <Input defaultValue={elem.number} onClick={setActive} key={nanoid()}>
     
    </Input>
  ));
};
