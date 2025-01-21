import React, { useState } from 'react';

const Colors = () => {
    const [color, setColor] = useState("black")
    const [name, setName] = useState("")
    const onClickToChangeRed = () => {
        setColor("red")
      }
      const onClickToChangeBlue = () => {
        setColor("blue")
      }
    const checkPink = (value) => {
        value == "핑크색" ? setName("") : setName(value)
    }
    return (
        <div>
            <p style={{color : color}}>{name}</p>
            <input onChange={
                (e) => {
                    setColor(e.target.value)
                    checkPink(e.target.value)
                }
            } 
                type="text" placeholder='이름을 입력하세요'/>
            <button onClick={onClickToChangeRed}>빨간색</button>
            <button onClick={onClickToChangeBlue}>파란색</button>
        </div>
    );
};

export default Colors;