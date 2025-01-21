import React from 'react';
import PassComponent from './PassComponent';
import LuckyComponent from './LuckyComponent';
import NotPassComponent from './NotPassComponent';
import UnluckyComponent from './UnluckyComponent';

// const Jsx05 = () => {
//     const age = 23;
//     const limit = 19;
//     return (
//         <div> 
//             {
//                 age % 2 == 0 && (<div>
//                     <h1>당첨</h1>
//                     </div>)
//             }          
//         { age >= limit ? (
//         <div>
//             <h1>입장 가능😊</h1>    
//         </div>
//         ) : (<div>
//             <h1>입장 불가😒</h1>
//             </div>)
//         }     
//     </div>
//     );
// };

const Jsx05 = () => {
  const age = 25;
  const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"];
  const isAudult = age > 19;
  const isEven = isAudult % 2 === 0;

  const passComponent = <PassComponent/>
  const notPassComponent = <NotPassComponent/>
  const luckyComponent = <LuckyComponent/>
  const unLuckyComponent = <UnluckyComponent/>

  const enter = isAudult ? passComponent : notPassComponent
  const win = isEven ? luckyComponent : unLuckyComponent

  return (
    <div>
      당신의 나이는 {age}이므로
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;