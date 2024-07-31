import React from 'react'
import "./Home.css"
import { Header, Main, Footer } from "/src/Components/Home/index.js"

export const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}