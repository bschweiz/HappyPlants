import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PlantContext } from "./PlantProvider"


export const PlantCard = ({ plant, props }) => {

    const { getPlantNames, names } = useContext(PlantContext)

    useEffect(() => {
        getPlantNames()
    }, [])

    const matchName = names.find(n => n.id === plant.trefleId)
    // console.log(matchName)
    // debugger
    if (matchName == null) { return <div></div> } else {
        // debugger
        return (
            <section className="plant_info">
                <Link className="card-link"
                    to={{
                        pathname: `/plants/${plant.id}`,
                        state: { chosenPlant: plant }
                    }}>
                    <h2>{plant.petName}</h2>
                </Link>




                <img src={plant.imageURL} alt={plant.petName} />
                <h3 className="card-title">Trefle ID # {plant.trefleId}</h3>
                <div>{matchName.commonName}</div>
                <div>{matchName.scientificName}</div>
                {/* <button className="btn--edit--Plant">Edit Plant</button>
                <button className="btn--delete--Plant"
                    onClick={
                        () => {
                            releasePlant(plant.id)
                                .then(() => {
                                    props.history.push("/plants")
                                })
                        }
                    }>Delete Plant</button> */}
            </section>
        )
    }
}




