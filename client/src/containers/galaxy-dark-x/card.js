import React from 'react';
import Typography from './typography';

const Card = (props) => {
    return(
        <div className="col-sm-6">
            <div className="galaxy-card" onClick={() => {location.href = props.link;}}>
                <RandomStar size={20} position={[10, 20]} />
                <RandomStar size={10} position={[30, 33]} />
                <RandomStar size={30} position={[20, 45]} />
                <div>
                    <Typography textType="tertiary" text={props.cardType} /> 
                </div>
                <div>
                    <Typography textType="secondary" text={props.cardTitle} /> 
                </div>
                <div>
                    <Typography textType="tertiary" text={props.cardSummary} /> 
                </div>
            </div>
        </div>
    );
};

const RandomStar = (props) => {
    const starstyle = {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        top: props.position[0],
        right: props.position[1]
    }
    return(
        <div className="star" style={starstyle}></div>
    );
}

export default Card;