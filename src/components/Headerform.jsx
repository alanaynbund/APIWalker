import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Headerform = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Search for:</h3>
                <select name="people" onChange={e=>setCategory(e.target.value)}>
                    <option value="person">person</option>
                    <option value="planet">planet</option>
                </select>
                <h3>ID:</h3>
                <input type="number" onChange={e=>setId(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Headerform














