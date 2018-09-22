import React from 'react';

const Input = (props) => {
    return(
        <input className={`galaxy-inp-box-${props.style}`} type={props.inputType} placeholder={props.placeholderText} />
    );
};

export default Input;