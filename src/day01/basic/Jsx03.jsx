// name과 age를 입력 후 화면에 랜더링 시키기 실습.
// 5분
import React from 'react';

const Jsx03 = () => {
  const name = "김세환"
  const age = 20

  return (
    <div>
      저의 이름은 {name}, 나이는 {age}
    </div>
  );
};

export default Jsx03;