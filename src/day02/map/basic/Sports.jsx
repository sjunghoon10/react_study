import React from 'react';

const Sports = ({sports}) => {
  const {name, member} = sports;
  return (
    <li>
      <p>종목 : {name}</p>
      <p>인원 : {member}명</p>
    </li>
  );
};

export default Sports;