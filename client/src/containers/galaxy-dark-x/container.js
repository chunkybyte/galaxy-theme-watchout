import React, {} from 'react';

import Button from './button';

import '../../style/css/galaxy-dark.css';

const Container = () => {
    return(
        <div className="row">
            <div id="galaxy-container" className="col-sm-12 col-lg-offset-1 col-lg-10">
                <div className="galaxy-text-primary header-box">
                    Space Welcomes you,<br/> fellow traveller. <br /><br />
                    <Button link="/dashboard" btnText="Enter through the wormhole >>"/>
                </div>
            </div>        
        </div>
    );
};

export default Container;