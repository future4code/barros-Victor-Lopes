import React from "react";
import { useNavigate } from "react-router-dom";

function TripDetailsPage() {

    const navigate = useNavigate();

    return (
        <>
            <h1>TripDetailsPage</h1>

            <button onClick={() => navigate("/")}>HOME</button>

            <button onClick={()=> navigate(-1)}>TO BACK</button>
        </>
    )
}

export default TripDetailsPage