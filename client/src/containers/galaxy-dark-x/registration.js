import React from 'react';

import Button from './button';
import Typography from './typography';
import Input from './inputBox';

const Registration = () => {
    return (
        <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-lg-10 col-lg-offset-1">
                <div className="header-box">
                    <Typography textType="primary" text="Wanna see" /><br/>
                    <Typography textType="primary" text="something fun," /><br/>
                    <Typography textType="primary" text="Wanderer." /><br/><br/>

                    <form className="galaxy-form galaxy-text-secondary" action="">
                        <Input style="full" inputType="text" placeholderText="State Thy Name, Traveller." />
                        <Input style="full" inputType="text" placeholderText="Your Mobile Digits." />
                        <Input style="full" inputType="text" placeholderText="Your Floor." />
                        <Button link="/dashboard" btnText="Wormhole is Open. Enter now. >>"/>
                    </form>
                </div>
            </div>        
        </div>
    );
};

export default Registration;