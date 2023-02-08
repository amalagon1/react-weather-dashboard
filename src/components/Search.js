import React, { useState } from 'react'


const Search = ({ city, setCity, displayCurrent }) => {

    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(true)
    }
    if (clicked) {
        return <div>
            <label htmlFor="city">Search for a city</label>
            <input onChange={(e) => { setCity(e.target.value) }} type="text" id="city" placeholder="e.x. Miami"></input>
            <button onClick={displayCurrent}>Submit</button>
        </div>
    }
    return <div className="search">
        {/* //         <p>Search for a city</p> */}
        <p onClick={clickHandler} className="add">+</p>

    </div>
    // return (
    //     <div className="search">
    //         <p>Search for a city</p>
    //         <p className="add">+</p>
    //          <label htmlFor="city">Search for a city</label>
    //         <input onChange={(e) => { setCity(e.target.value) }} type="text" id="city" placeholder="e.x. Miami"></input>
    //         <button onClick={displayCurrent}>Submit</button> 
    //     </div>

    // )
}

export default Search
