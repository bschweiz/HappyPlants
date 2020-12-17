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
        
    return <div className="trefle_results">Your Results:
    {
        fuzzyResultArray.map(pla => <TrefleCard key={pla.id} plant={pla} />)
    }
    </div>
    
    }