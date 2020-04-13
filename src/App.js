import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Formulaire from './components/formulaire'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './Auth';
import app from './base'
import Authenticated from './Authenticated';


// import NotAuthenticated from 'react-stormpath';

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
    const isLoggedIn = app.auth().currentUser;
    let authenticated = "";
    console.log(isLoggedIn);
    if (isLoggedIn == null) {
      authenticated = <Authenticated />;
    } else {
      authenticated = <button id="deconnexion_button" onClick={() => app.auth().signOut()}>Déconnexion</button>;
    }
    return (
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

              {authenticated}
              {/* <Input
                addonBefore='Utilisateur'
                value={this.state.user}
                onChange={this.handleChange_user}
              />
              <Input
                addonBefore='Mot de passe'
                type='password'
                value={this.state.mdp}
                onChange={this.handleChange_mdp}
              />
              <Formulaire /> */}
            </header>
          </div>
        </Router>
      </AuthProvider>
    )
  }
}


export default App;
