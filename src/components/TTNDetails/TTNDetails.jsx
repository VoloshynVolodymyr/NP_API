import { getParcelData } from '../../services/api/TTH';
import { InfoWrapper, Span, Visibility } from './TTNDetails.styled';
import React, { useState, useEffect } from 'react';

export const TTNDetails = activeTTN => {
  const active = activeTTN.activeTTN;
  const [parcel, setParcel] = useState('');

  let parcelData;
  useEffect(() => {
    fetchParcelData(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const fetchParcelData = async num => {
    try {
      const parcelDetails = await getParcelData(num);
      parcelData = await parcelDetails;
      setParcel(parcelData[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    Number,
    // CargoDescriptionString,
    Status,
    StatusCode,
    WarehouseSenderAddress,
    WarehouseRecipientAddress,
    ScheduledDeliveryDate,
    DocumentCost,
    PayerType,
    FactualWeight,
  } = parcel;

  const payingPerson = PayerType === 'Sender' ? 'Відправник' : 'Отримувач';
  return StatusCode === 3 ? (
    <InfoWrapper>
      <Span>За таким номером нічого не знайдено</Span>
    </InfoWrapper>
  ) : (
    <InfoWrapper>
      <Span>{Number}</Span>
      <Span>{Status}</Span>
      <Visibility>
        <Span>Адреса відправки : {WarehouseSenderAddress}</Span>
      </Visibility>
      <Visibility>
        <Span>Адреса доставки : {WarehouseRecipientAddress}</Span>
      </Visibility>
      <Span>{ScheduledDeliveryDate}</Span>
      <Span>Вартість : {DocumentCost} грн</Span>
      <Span>Сплачує : {payingPerson}</Span>
      <Span>Вага : {FactualWeight} кг</Span>
    </InfoWrapper>
  );
};
