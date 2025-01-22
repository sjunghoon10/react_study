import React from 'react';

const User = ({user}) => {
    
    const {name, phone,company, address} = user
    return (
        <div>
            <li>
                <p>이름 : {name}</p>
                <p>전화번호 : {phone} </p>
                <p>회사명 : {company.name}</p>
                <p>주소 : {address.city}</p>
                {/* {origin.map((coa, i, origin) => i === origin.length -1 ? coa : coa + ", ")} */}
            
            </li>
        </div>
    );
};

export default User;