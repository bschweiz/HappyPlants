import React, { useContext, useEffect} from 'react'
import { TrefleContext } from "./TrefleProvider";
import { TrefleCard } from "./TrefleCard"


export const TrefleList = () => {

    const { fuzzyResultArray, getPlantByFuzzy } = useContext(TrefleContext)

    useEffect(() => {
        getPlantByFuzzy()
        }, [])
        
    useEffect(() => {
        console.log("test to see if the array of results came back")
        console.log(fuzzyResultArray)
        }, [fuzzyResultArray])
        
    if (fuzzyResultArray.length) {    
    return <div className="trefle_results">Your Results:
    {
        fuzzyResultArray.map(pla => <TrefleCard key={pla.id} plant={pla} />)
    }
    </div>
    } else {return <div>Enter a plant name</div>}
    }