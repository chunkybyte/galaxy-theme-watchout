import React from 'react';

import '../../style/css/galaxy-dark.css';

import Button from './button';
import Typography from './typography';
import Input from './inputBox';
import Image from './image';
import Card from './card';

const ComponentList = () => {
    return(
        <div style={{paddingTop: '40px'}}>
            <Typography textType="primary" text="Components List" /> 
            <div className="componentBox galaxy-text-secondary">
                <h3><b>Component Name :</b> Button</h3> 
                <h5><b>Props :</b> link and btnText</h5>
                <Button link="" btnText="Sample Text"></Button>
            </div>
            <div className="componentBox galaxy-text-secondary">
                <h3><b>Component Name :</b> Typography</h3> 
                <h5><b>Props :</b> textType and text</h5>
                textType(primary) : <Typography textType="primary" text="Sample Text"></Typography>
                <br/>
                textType(secondary) : <Typography textType="secondary" text="Sample Text"></Typography>
                <br/>
                textType(tertiary) : <Typography textType="tertiary" text="Sample Text"></Typography>
            </div>
            <div className="componentBox galaxy-text-secondary">
                <h3><b>Component Name :</b> Input</h3> 
                <h5><b>Props :</b> style, inputType and placeholderText </h5>
                style(full) : <Input style="full" inputType="text" placeholderText="Sample Placeholder"></Input>
                <br/>
                style(single) : <Input style="single" inputType="text" placeholderText="Sample Placeholder"></Input>
                <br/>
                style(corner) : <Input style="corner" inputType="text" placeholderText="Sample Placeholder"></Input>
            </div>
            <div className="componentBox galaxy-text-secondary">
                <h3><b>Component Name :</b> Image</h3> 
                <h5><b>Props :</b> imageSource and altText</h5>
                <Image imageSource="https://pbs.twimg.com/media/DFhGtfUUwAARJxs.jpg" altText="Sample Alt Text"></Image>
            </div>
            <div className="componentBox galaxy-text-secondary">
                <h3><b>Component Name :</b> Card</h3> 
                <h5><b>Props :</b> link, cardType, cardTitle and cardSummary </h5>
                <Card link="/detailPage" cardType="Quiz / Poll" cardTitle="Card Heading" cardSummary="Lorem Ipsum Stuff typed out because typing is more fun than googling Lorem Ipsum text and then pasting here."></Card>
            </div>
        </div>
    );
}

export default ComponentList;