import React, { useRef, useState } from 'react';

const ExpertFood = () => {
    const [result, setResult] = useState("");
    const inputRef = useRef([])
    
const onClickToPrintFood = () => {
    let food = "";
    for(let i = 0; i < inputRef.current.length; i++){
          let input = inputRef.current[i];
          i == 0 ? food+=input.value : food += "(" + input.value + ")";
          console.log(input)
        }
        setResult(food)
    }

const onClickToDeleteFood= () => {
    setResult("");
}
    return (
        <div>
        <input ref={(el) => { inputRef.current[0] = el }} type="text" placeholder=''/>
        <input ref={(el) => { inputRef.current[1] = el }} type="text" placeholder=''/>
        <div><button onClick={onClickToPrintFood}>추가</button><button onClick={onClickToDeleteFood}>삭제</button></div>
        {/* <ButtonComponent result/> */}
        <p>{result}</p>
        </div>
    );
};

export default ExpertFood;