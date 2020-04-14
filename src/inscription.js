import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from './base'
import { Input, Button } from 'antd'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push('/')
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
                    <Input name='email' type='email' placeholder='Email' />
                </label>
                <label>
                    <Input name='password' type='password' placeholder='Mot de passe' />
                </label>
                <Button htmlType='submit'>S'inscrire</Button>
            </form>
        </div>
    )

}

export default withRouter(SignUp);