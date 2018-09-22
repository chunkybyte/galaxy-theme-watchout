import React from 'react';
import { Route, Redirect } from 'react-router'
import Button from './button';

const Dashboard = () => {
    return (
        <div style={{padding: '100px'}}>
            <Button link="/components" btnText="Components List >>>" />
            <br /><br />
            <Button link="/registration" btnText="Registration Page >>>" />
            <br /><br />
            <Button link="/mainpage" btnText="Main Page Dashboard >>>" />
        </div>
    );
};

export default Dashboard;