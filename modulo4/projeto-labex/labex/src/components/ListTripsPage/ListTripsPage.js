import React from "react";
import { useNavigate } from "react-router-dom";

function ListTripsPage() {

    const navigate = useNavigate()

    return (
        <div>

            <h1>ListTripsPage</h1>

            <button onClick={() => navigate("/ApplicationForm")}>Canditar-se</button>

            <button onClick={() => navigate("/")}>HOME</button>

            <button onClick={()=> navigate(-1)}>TO BACK</button>

        </div>
    )
}

export default ListTripsPage