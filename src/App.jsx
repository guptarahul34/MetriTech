import React from 'react'
import Header from './Header';
import Menu from './Menu';
import { Switch,Route } from 'react-router-dom';


const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route exact path="/menu" component={Menu}/>
        </Switch>
        </>
    )
}

export default App;
