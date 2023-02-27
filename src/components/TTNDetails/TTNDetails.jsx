import { getParcelData } from '../../services/api/TTH';
import { InfoWrapper, Span, Visibility } from './TTNDetails.styled';
import React, { useState, useEffect } from 'react';

export const TTNDetails = activeTTN => {
  const active = activeTTN.activeTTN;
  const [record, setRecord] = useState('');

  let data;
  useEffect(() => {
    fetchParcelData(active);
  }, [active]);

  const fetchParcelData = async num => {
    try {
      const parcelDetails = await getParcelData(num);
      data = await parcelDetails;
      setRecord(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    Number,
    Status,
    StatusCode,
    WarehouseSenderAddress,
    WarehouseRecipientAddress,
    ScheduledDeliveryDate,
    DocumentCost,
    PayerType,
    FactualWeight,
  } = record;

  return (
    (StatusCode==3)
    ?(<InfoWrapper>
    <Span>За таким номером нічого не знайдено</Span>
    </InfoWrapper>)
    :(<InfoWrapper>
      <Span>{Number}</Span>
      <Span>{Status}</Span>
      <Visibility><Span>Адреса відправки : {WarehouseSenderAddress}</Span></Visibility>
      <Visibility><Span>Адреса доставки : {WarehouseRecipientAddress}</Span></Visibility>
      <Span>{ScheduledDeliveryDate}</Span>
      <Span>Вартість : {DocumentCost} грн</Span>
      <Span>Сплачує : {PayerType}</Span>
      <Span>Вага : {FactualWeight} кг</Span>
    </InfoWrapper>)
  );
};
