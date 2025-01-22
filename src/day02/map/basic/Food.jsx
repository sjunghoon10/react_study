import React from 'react';

const Food = ({food}) => {
  const {name, price, origin} = food;
  return (
    <li>
      <p>음식명 : {name}</p>
      <p>가격 : {price} </p>
      <p>
      {origin.map((coa, i, origin) => coa)}
      </p>
    </li>
  );
};

export default Food;