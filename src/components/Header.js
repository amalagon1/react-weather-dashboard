import React from 'react';
import Search from './Search'

const Header = ({ city, setCity, displayCurrent }) => {
    return (
        <header>
            <nav className="mobile-nav">
                <div className="mobile-nav_items">
                    <div className="burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <Search
                        city={city}
                        setCity={setCity}
                        displayCurrent={displayCurrent} />

                </div>
            </nav>
            <nav></nav>

        </header>
    )
}

export default Header
