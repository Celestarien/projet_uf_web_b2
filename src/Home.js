import React from 'react'
import app from './base'
import { Button } from 'antd'
import Search from './pages/Search'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <a href="../dashboard/dashboard.html">Dashboard</a>
            <Search />
            <Button type='primary' id="deconnexion_button" onClick={() => app.auth().signOut()}>Déconnexion</Button>

        </>
    )
}

export default Home;