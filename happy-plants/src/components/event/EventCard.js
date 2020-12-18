import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { PlantContext } from "../plant/PlantProvider"



export const EventCard = ({ event, props }) => {

    const { plants, getPlants } = useContext(PlantContext)
    const { getEvents, updateCompleted } = useContext(EventContext)
    // debugger
    useEffect(() => {
        getEvents().then(getPlants)
    }, [])

    const matchingPlant = plants.find(p => p.id === event.plantId)
    
    const checkboxControl = (evt) => {
        if(evt.target.checked === true){
            updateCompleted(parseInt(evt.target.id), {complete: true})
        } else {
            updateCompleted(parseInt(evt.target.id), {complete: false})
        }
    }
    if (matchingPlant == null) { return <div></div> } else {
        return (
            <section className="event_info">
            {/* <button
                onClick={evt => {
                    // console.log(evt)
                    // showCompleted({ plant })
                }}
            >View Completed Cares </button> */}
                <Link className="card-link"
                    to={{
                        pathname: `/events/${event.id}`,
                        state: { chosenEvent: event, chosenPlant: matchingPlant }
                    }}>
                    <h4 className="event__date"> {event.water ? "Date of Watering" : "Date of Check-up"} : {event.date}</h4>
                </Link>
                    <h4 className="event__petName"> Checking on {matchingPlant.petName}</h4>
                    <label htmlFor={event.id}>{event.complete ? "Completed" : "Check to mark as completed"}</label>
                    <input type="checkbox" key={event.id} id={event.id} name="checkbox" checked=
                    {event.complete ? "checked": ""}
                    onChange={evt=>{
                        checkboxControl(evt)
                    }} />
            </section>
        )
    }
}


  // const [chosenPlant, setPlant] = useState({})
    
    // const handlePlantSelect = ({ plant }) => {
    //     return <PlantForm 
    //     key={plant.id}
    //         scientificName={plant.scientific_name}
    //         commonName={plant.common_name}
    //         imageURL={plant.image_url}
    //         />
    // }

    // useEffect(() => {
    //     console.log(chosenPlant)
    //     // handlePlantSelect(chosenPlant)
    // }, [chosenPlant])

