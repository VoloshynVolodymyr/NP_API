import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input, ListWrapper, Button } from './TTNList.styled';

export const TTNList = ({ invoice, onClick, onClick2 }) => {

  const [ttnList, setTtnList] = useState(JSON.parse(localStorage.getItem('invoice')) || [],
  );

  const setActive = (e) => {
    onClick(e.target.value)
  };

  const removeItemFromLocalstorage = (elem) => {
    let arr=[];
    arr = ttnList.filter(item => item!==elem);
    onClick2(arr)
  }

  return invoice.map(elem => (
    <ListWrapper key={nanoid()}>
    <Input type="text" defaultValue={elem} onClick={setActive}/>
    <Button onClick={()=>{removeItemFromLocalstorage(elem);}} type="button"></Button>
    </ListWrapper>
  ));
};
