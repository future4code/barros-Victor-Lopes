import React from "react";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {

    const navigate = useNavigate();

    return (
        <>
            <h1>ApplicationFormPage</h1>

            <button onClick={() => navigate("/")}>HOME</button>

            <button onClick={()=> navigate(-1)}>TO BACK</button>
        </>
    )
}

export default ApplicationFormPage