import React from 'react'
import Login from './Login';
import SignUp from './signup';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';


import Search from './pages/Search'

const authenticated = () => {
    return (
        <>
            <div>
                <a href='Login'><button>Se connecter</button></a>
                <a href='signup'><button>S'inscrire</button></a>
            </div>
            <div>
                <PrivateRoute exact path='/Home' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
            </div>
        </>
    )
}

export default authenticated;