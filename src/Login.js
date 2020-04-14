import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from './base'
import { AuthContext } from './Auth'
import { Input, Button } from 'antd'


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
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>
                Connexion
            </h1>
            <form onSubmit={handleLogin}>
                <label>
                    <Input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    <Input name='password' type='password' placeholder='Mot de passe' />
                </label>
                <Button htmlType='submit'>Se connecter</Button>
            </form>
        </div>
    )

}

export default withRouter(Login)