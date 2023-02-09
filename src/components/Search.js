import React, { useRef, useEffect } from 'react';


const Search = ({ city, setCity, displayCurrent }) => {

    // const key = AIzaSyCS0bb0F4WaMYYaJlP6mXf74N - eIg5TUws

    // const tryThis = (e) => {
    //     console.log(e.target.value)
    // }

    // const clickHandler = () => {
    //     setClicked(true)
    // }

    const autoCompleteRef = useRef();
    const inputRef = useRef();


    const options = {
        // componentRestrictions: { country: "ng" },
        // fields: ["address_components", "geometry", "icon", "name"],
        types: ["(cities)"]
    };
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );
        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            console.log({ place });
            const newCity = place.address_components[0].long_name;
            setCity(newCity);
            // console.log(place.address_components[0].long_name)
        });
    }, []);

    return (
        <div className="modal">
            <label htmlFor="city">Search for a city</label>
            <div className="modal-input">
                {/* <input onChange={(e) => { setCity(e.target.value) }} type="text" id="city" placeholder="e.x. Miami"></input> */}
                <input type="text" ref={inputRef} />
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
