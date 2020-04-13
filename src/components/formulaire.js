import React from 'react'
import { Input, Button } from 'antd'

const inputStyle = {
    minWidth: '240px',
    width: 'calc(1/3*100%)',
    maxWidth: '320px'
}

const exemple = () => (
    <div>
        <h2>Pour appeler plusieurs fois</h2>
    </div>
)

const Formulaire = () => (
    <div>
        <form>
            <Button
                type='primary'
                htmlType='submit'>
                Se connecter
            </Button>
        </form>
    </div>
)

export default Formulaire