import React, { useState } from 'react'


const Search = ({ city, setCity, displayCurrent }) => {

    const key = AIzaSyCS0bb0F4WaMYYaJlP6mXf74N - eIg5TUws



    // const clickHandler = () => {
    //     setClicked(true)
    // }

    return (
        <div className="modal">
            <label htmlFor="city">Search for a city</label>
            <div className="modal-input">
                <input onChange={(e) => { setCity(e.target.value) }} type="text" id="city" placeholder="e.x. Miami"></input>
                <button onClick={displayCurrent}>Submit</button>
            </div>

        </div>
    )
}


// return (
//     <div className="search">
//         <p>Search for a city</p>
//         <p className="add">+</p>
//          <label htmlFor="city">Search for a city</label>
//         <input onChange={(e) => { setCity(e.target.value) }} type="text" id="city" placeholder="e.x. Miami"></input>
//         <button onClick={displayCurrent}>Submit</button> 
//     </div>

// )

export default Search
