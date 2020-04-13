import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from './base'


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push('/Home')
        } catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div>
            <h1>
                Inscription
            </h1>
            <form onSubmit={handleSignUp}>
                <label>
                    <input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    <input name='password' type='password' placeholder='Mot de passe' />
                </label>
                <button type='submit'>S'inscrire</button>
            </form>
        </div>
    )

}

export default withRouter(SignUp);