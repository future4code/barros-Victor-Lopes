import React from "react";
import { useNavigate } from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>LoginPage</h1>

            <button onClick={() => navigate("/Admin")}>Listas</button>

            <button onClick={() => navigate("/CreateTrip")}>Create trips</button>

            <button onClick={() => navigate("/TripDetails")}>Details trips and profiles</button>

            <button onClick={() => navigate("/")}>HOME</button>

            <button onClick={()=> navigate(-1)}>TO BACK</button>
        </div>
    )
}

export default LoginPage