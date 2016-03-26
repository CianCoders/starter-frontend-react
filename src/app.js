import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
require('bootstrap-loader');


const Home = () => <div><h1>Hola Mundo</h1></div>;

class App extends React.Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={Home}></Route>
            </Router>
        );
    }
}

export default App;
