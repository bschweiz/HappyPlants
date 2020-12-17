import React, { useContext } from "react"
import { PlantContext } from "../plant/PlantProvider"

export const PlantDetail = (props) => {
    // debugger
    const { releasePlant, getPlantNames, names } = useContext(PlantContext)

    return (

        <section className="plant">
            <h2 className="plant__name">{props.location.state.chosenPlant.petName}</h2>
            <img src={props.location.state.chosenPlant.imageURL} alt={props.location.state.chosenPlant.petName} />
            <h3 className="trefleId">Trefle ID: {props.location.state.chosenPlant.trefleId}</h3>
            <button className="btn--edit--Plant">Edit Plant</button>
                <button className="btn--delete--Plant"
                    onClick={
                        () => {
                            releasePlant(props.location.state.chosenPlant.id)
                                .then(() => {
                                    props.history.push("/plants")
                                })
                        }
                    }>Delete Plant</button>


        </section>
    )

    {/* <h2 className="card-title">Trefle ID # {plant.id}</h2>
                
                
                <div>{matchName.commonName}</div>
                <div>{matchName.scientificName}</div>
                
         */}

    {/* <div>
                <h4>Employees</h4>
                {props.location.state.chosenLocation.employees.map(e => e.name).join(", ")}
            </div>
            <div>
                <h4>Current Residents</h4>
                {
                    props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }
            </div>
       */}

}