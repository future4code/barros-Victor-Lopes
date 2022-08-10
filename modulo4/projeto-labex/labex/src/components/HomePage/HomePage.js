import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    return (

        <div>
            <h1>HomePage</h1>

            <button onClick={() => navigate("/Login")}>Login</button>

            <button onClick={() => navigate("/ListTrips")}>Viagens</button>
            
        </div>

    )
}

export default HomePage