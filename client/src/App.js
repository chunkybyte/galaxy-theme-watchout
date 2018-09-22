import React, {PropTypes, Component} from 'react';
import { withRouter } from "react-router-dom";
//var QRCode = require('qrcode.react');
import './style/css/App.scss';
// import Routing from './router/router';
import GalaxyRouter from './router/galaxy-router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

       //  <QRCode value="https://anuraggautam77.github.io "/>  
    }
    render() {
        // return (<Routing/>);
        return(<GalaxyRouter />);
    }
}

export default withRouter(App);
// export default App;

