import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import SignUp from './inscription';
import Media from "./pages/Media";

class App extends Component {
  state = {
    user: '',
    mdp: ''
  }

  handleChange_user = event => {
    const user = event.target.value
    this.setState({ user })
    console.log(user)
  }

  handleChange_mdp = event => {
    const mdp = event.target.value
    this.setState({ mdp })
    console.log(mdp)
  }

  render() {
    return (
      <div className="App">
        <div className="racine">
          <AuthProvider>
            <Router>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Bienvenue sur mon shop.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réalisé avec React
                  </a>
                  <div id='auth_div'>
                    <Button type='primary' href='/Login'>Se connecter</Button>
                    <Button type='primary' href='inscription'>S'inscrire</Button>
                  </div>
                  <div>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/inscription' component={SignUp} />
                    <Switch>
                      <PrivateRoute path="/serie/:mediaId">
                        <Media type="tv" />
                      </PrivateRoute>
                      <PrivateRoute path="/film/:mediaId">
                        <Media type="movie" />
                      </PrivateRoute>
                    </Switch>
                  </div>
                </header>
              </div>
            </Router>
          </AuthProvider>
        </div>
      </div>
    )
  }
}


export default App;
