import React from 'react'
import PickUp from '../pickUp/PickUp';
import "./pickList.css";
import Arrow from '../arrow/Arrow';

export default function PickList() {
  return (
    <div className='pick'>
        <PickUp />
        <Arrow/>
        <PickUp bien="home-pickUp"/>
    </div>
  )
}
