// import { bottles, inventas } from '../../utils/constants';
// import { useState, useEffect } from 'react';

import { useState } from "react";

function ItemList(props) {
  const [ sortedBy, setSortedBy] = useState('');

  function changeDateOrderHandler(date) {
    return date.split('.').map((num, ind) => {
      if (ind === 1) {
        return date.split(".")[0];
      } else if (ind === 0) {
        return date.split(".")[1];
      }
      return num;
    }).join('.');
  }

  function sortByField(e) {
    if(sortedBy === e.target.id) {
      props.setInventarizations([ ...props.inventarizations].reverse());
      return;
    }
    const sorted = props.inventarizations.sort((a, b) => {
      if(e.target.id === 'date') {
        return new Date(changeDateOrderHandler(a.date)) > new Date(changeDateOrderHandler(b.date)) ? 1 : -1;
      } else if (e.target.id === 'barName') {
        return a.barName >= b.barName ? 1 : -1;
      } else {
        return a.nameInCharge >= b.nameInCharge ? 1 : -1;
      }
    })
      props.setInventarizations([ ...sorted]);
      setSortedBy(e.target.id);
  }
  

  
  return (
    <div className='itemList'>
      <h1 className='itemList__title'>Предыдущие инвентаризации</h1>
      <div className='itemList__sort-btn-container'>
        <button className='itemList__sort-data-btn' type='button' id='barName' onClick={sortByField}>Бар &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='date' onClick={sortByField}>Число &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='nameInCharge' onClick={sortByField}>Ответственный &#9660;</button> 
      </div>
      <ul className='itemList__list'>{
        props.inventarizations.map((item, index) => {
          return (<props.component key={item._id}
                                  title={item.title}
                                  volume={item.volume}
                                  capWeight={item.capWeight}
                                  fullWeight={item.fullWeight}
                                  emptyWeight={item.emptyWeight}
                                  barcode={item.barcode}
                                  alcoType={item.alcoType}
                                  label={item.label}
                                  origin={item.origin}
                                  btlModel={item.btlModel}
                                  nameInCharge={item.nameInCharge}
                                  barName={item.barName}
                                  date={item.date}
                                  _id={item._id}
                                  orderNumber = {index}

                            />)
        })
      }</ul>
      {/* <ul className='itemList__list'>{
        inventas.map((item, index) => {
          return <props.component key={item._id}
                                  title={item.title}
                                  volume={item.volume}
                                  capWeight={item.capWeight}
                                  fullWeight={item.fullWeight}
                                  emptyWeight={item.emptyWeight}
                                  barcode={item.barcode}
                                  alcoType={item.alcoType}
                                  label={item.label}
                                  origin={item.origin}
                                  btlModel={item.btlModel}
                                  nameInCharge={item.nameInCharge}
                                  barName={item.barName}
                                  date={item.date}
                                  _id={item._id}
                                  orderNumber = {index}
                            />
        })
      }</ul> */}
    </div>
  )
}

export default ItemList;