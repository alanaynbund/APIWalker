import React, {useState, useEffect} from "react";
import axios from "axios"
import { useParams } from 'react-router-dom'

const Person = () => {
    const {id} = useParams()
    const [person, setPerson] = useState()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                setPerson(res.data)
            })
            .catch(err=>console.log(err))
    }, [id])



    return (
        person?
        <div>
            <h1>{person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Birth Year: {person.birth_year}</p>
        </div>:
        <h1>Loading...</h1>
    )
}

export default Person