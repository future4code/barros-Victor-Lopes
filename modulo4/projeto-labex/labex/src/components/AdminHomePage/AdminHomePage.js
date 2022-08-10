import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHomePage() {

    const navigate = useNavigate();

    return (

        <>
            <h1>AdminHomePage</h1>

            <button onClick={() => navigate("/")}>HOME</button>

            <button onClick={()=> navigate(-1)}>TO BACK</button>
        </>
    )
}

export default AdminHomePage