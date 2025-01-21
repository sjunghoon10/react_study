import React, { useState } from 'react';

// 강아지 버튼, 고양이 버튼2개 생성한다.
// 버튼을 눌렀을 때 각 울음소리가 나오도록 화면에 구현한다.
// 강아지 버튼을 누르면 멍멍이 화면에 출력되고,
// 고양이 버튼을 누르면 야옹이 화면에 출력된다.

const Sound = () => {
    const dog = "멍멍"
    const cat = "야옹이"
    const [animal, setWord] = useState("")
    const onClickToDog = () => {
        setWord(dog)
    }
    const onClickToCat = () => {
        setWord(cat)
    }
    return (
        <div>
            <button onClick={onClickToDog}>강아지</button>
            {animal}
            <button onClick={onClickToCat}>고양이</button>
        </div>
    );
};

export default Sound;