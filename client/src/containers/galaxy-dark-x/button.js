import React from 'react';

const Button = (props) => {
    return(
        <button className="galaxy-button-primary galaxy-text-secondary" onClick={() => {location.href = props.link;}}>{props.btnText}</button>
    );
}

export default Button;