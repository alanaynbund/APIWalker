import React, {useState, useEffect} from "react";
import axios from "axios"
import { useParams } from 'react-router-dom'

const Planet = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                setPlanet(res.data)
            })
            .catch(err=>console.log(err))
    }, [id])



    return (
        planet?
        <div>
            <h1>{planet.name}</h1>
            <p>Diameter: {planet.diameter}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Rotation Period: {planet.rotation_period}</p>
        </div>:
        <h1>Loading...</h1>
    )
}

export default Planet