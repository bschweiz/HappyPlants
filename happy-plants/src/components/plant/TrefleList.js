import React, {useState, useContext, useEffect} from 'react'
import { TrefleContext } from "./TrefleProvider";
import { TrefleCard } from "./TrefleCard"


export const TrefleList = () => {
    let fuzzyName = "aloe"

    const { fuzzyResultArray, getPlantByFuzzy } = useContext(TrefleContext)

    useEffect(() => {
        getPlantByFuzzy(fuzzyName)
        }, [])
        
    useEffect(() => {
        console.log("test to see if the array of results came back")
        console.log(fuzzyResultArray)
        }, [fuzzyResultArray])
        
    if (fuzzyResultArray.length) {    
    return <div className="trefle_results">
    {
        fuzzyResultArray.map(pla => <TrefleCard key={pla.id} plant={pla} />)
    }
    </div>
    } else {return <div>no array data yet</div>}
    }