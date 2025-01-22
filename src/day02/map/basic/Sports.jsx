import React from 'react';

const Sports = ({sports}, i) => {
    const {name, member} = sports;
    return (
        <li>
            <p>종목 : {name}</p>
            <p>종목 : {member}</p>
        </li>
    );
};

export default Sports;