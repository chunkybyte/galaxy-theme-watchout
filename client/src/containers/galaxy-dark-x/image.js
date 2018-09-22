import React from 'react';

const Image = (props) => {
    return(
        <img className="galaxy-img-one" src={props.imageSource} alt={props.altText} />
    );
};

export default Image;