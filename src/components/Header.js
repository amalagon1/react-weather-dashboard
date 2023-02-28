import React, { useState } from 'react';
import Search from './Search'

const Header = ({ city, addCity, setAddCity, setCity, displayCurrent }) => {



    const clickHandler = () => {
        setAddCity(true)
    }
    return (
        <header>
            <nav className="mobile-nav">
                <div className="mobile-nav_items">

                    <div className="burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <h1>WeatherNow</h1>
                    <p onClick={clickHandler} className="add">+</p>
                    {/* <Search
                        city={city}
                        setCity={setCity}
                        displayCurrent={displayCurrent} /> */}

                </div>
            </nav>
            <nav></nav>

        </header>
    )
}

export default Header
