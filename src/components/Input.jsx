import React from "react";


const Input = () => {

    return (
        <div className="input-container">
            <input placeholder="Enter a City Name" className="user-input" type="text" />
            <button className="search-button" value="" onChange="">Search</button>
        </div>
    )
}


export default Input;