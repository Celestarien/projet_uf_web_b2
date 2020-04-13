import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from './base'
import { AuthContext } from './Auth'



const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } catch (error) {
            alert(error)
        }
    }, [history])

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/Home" />
    }

    return (
        <div>
            <h1>
                Connexion
            </h1>
            <form onSubmit={handleLogin}>
                <label>
                    <input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    <input name='password' type='password' placeholder='Mot de passe' />
                </label>
                <button type='submit'>Se connecter</button>
            </form>
        </div>
    )

}

export default withRouter(Login)