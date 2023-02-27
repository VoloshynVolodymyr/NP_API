import {getParcelData} from '../../services/api/TTH';
import { InfoWrapper } from './TTNDetails.styled';
import React, { useState, useEffect } from 'react';

export const TTNDetails = (activeTTN) => {
    const active = activeTTN.activeTTN
    const [record, setRecord] = useState('');

let data;
    useEffect(()=>{
        fetchParcelData(active)
        console.log("Fetching successful");
      }, [active])

      const fetchParcelData = async (num) => {
        try {
          const parcelDetails = await getParcelData(num);
          data = await(parcelDetails);
          setRecord(data[0])
        } catch (error) {
          console.log(error);
        }
      };

      const {Number, Status, WarehouseSender, WarehouseRecipient, ScheduledDeliveryDate} = record;

            return (
        <InfoWrapper>
        <span>{Number}</span>
        <span>{Status}</span>
        <span>{WarehouseSender}</span>
        <span>{WarehouseRecipient}</span>
        <span>{ScheduledDeliveryDate}</span>
        </InfoWrapper>
       )
}