import React from 'react'
import app from './base'


import Search from './pages/Search'

const Home = () => {

    console.log(app.auth().currentUser);
    return (
        <>
            <h1>Home</h1>
            <Search />
        </>
    )
}

export default Home;