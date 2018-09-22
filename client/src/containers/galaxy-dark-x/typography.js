import React from 'react';

const Typography = (props) => {
    return(
        <span className={`galaxy-text-${props.textType}`}>
            {props.text}
        </span>
    );
};

export default Typography;