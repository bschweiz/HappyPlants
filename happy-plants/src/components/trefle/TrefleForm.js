import React, { useContext, useRef } from 'react';
import { TrefleContext } from "./TrefleProvider";

export const TrefleForm = (props) => {
    const {fuzzyResultArray, getPlantByFuzzy} = useContext(TrefleContext)
// i neet to create references to where the input form will be
    const searchName = useRef(null)
// now the search funciton
    const searchTrefleByName = () => {
    if (searchName === "") {
        window.alert('Please enter a plant name')
    } else {
        getPlantByFuzzy(searchName.current.value)
        // .then(() => props.history.push())
    }
    }

return (
    <form className="trefleForm">
        <h2 className="trefleForm__title">Search for a Plant</h2>
        <fieldset>
            <input type="text" ref={searchName} required autoFocus placeholder="Plant name" />
        </fieldset>
    
        <button type="submit"
                onClick={evt => {
                    evt.preventDefault() 
                    searchTrefleByName()
                }}
                className="btn btn-primary">
                Search for Plant
        </button>
    </form>
)
}
