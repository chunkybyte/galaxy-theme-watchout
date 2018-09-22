import React from 'react';

import Typography from './typography';
import Card from './card';

const MainPage = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="header-box">
                        <Typography textType="primary" text="Your Space Passport" /><br/><br/>
                    </div>
                </div>        
            </div>
            <div className="row">
                <Card link="/someLink" cardType="Quiz" cardTitle="Quiz Title" cardSummary="Long Long Summary" />
                <Card link="/someLink" cardType="Quiz" cardTitle="Quiz Title" cardSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Card link="/someLink" cardType="Poll" cardTitle="Poll Title : New" cardSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <Card link="/someLink" cardType="Poll" cardTitle="Poll Title : New" cardSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </div>
        </React.Fragment>
    );
};

export default MainPage;