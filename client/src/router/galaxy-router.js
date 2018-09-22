import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';

import Container from '../containers/galaxy-dark-x/container';
import ComponentList from '../containers/galaxy-dark-x/components-list';
import Dashboard from '../containers/galaxy-dark-x/dashboard';
import Registration from '../containers/galaxy-dark-x/registration';
import MainPage from '../containers/galaxy-dark-x/mainpage';

export default class GalaxyRouter extends React.Component {
    render() {
        return(
            <Router>
                <React.Fragment>
                    <Route path="/" exact component={Container} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/components" component={ComponentList} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/mainpage" component={MainPage} />
                </React.Fragment>
            </Router>
        );
    }
}