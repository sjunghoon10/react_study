import React from 'react';

const User = ({user}) => {
  const {name, phone, company, address} = user;
  return (
    <li>
      <p>이름 : {name}</p>
      <p>전화번호 : {phone}</p>
      <p>회사명 : {company.name}</p>
      <p>도시명 : {address.city}</p>
    </li>
  );
};

export default User;