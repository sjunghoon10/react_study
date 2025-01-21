import React from "react";


const Jsx03 = () => {
    const name = "김세환"
    const age = 20
    return (
        <div>
         <React.Fragment>
         <p>저의 이름은 {name}입니다.</p>
         <p>저의 나이는는 {age}세 입니다.</p>
         </React.Fragment>
        </div>
    );
};

export default Jsx03;
// name과 age를 입력 후 화면에 렌더링 시키기 실습.
// export default function Jsx02(){
//     const name = "신정훈"
//     const age = 34;
//     return (
//         <React.Fragment>
//         <p>저의 이름은 {name}입니다.</p>
//         <p>저의 나이는는 {age}세 입니다.</p>
//         </React.Fragment>
//     )
// }