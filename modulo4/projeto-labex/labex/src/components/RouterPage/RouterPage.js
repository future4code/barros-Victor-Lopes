import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import HomePage from "../HomePage/HomePage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import LoginPage from "../LoginPage/LoginPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";

function RouterPage() {

    return (
        <BrowserRouter>

            <Routes>

                <Route index element={<HomePage />} />

                <Route path="Login" element={<LoginPage />} />

                <Route path="ListTrips" element={<ListTripsPage />} />

                <Route path="ApplicationForm" element={<ApplicationFormPage />} />

                <Route path="Admin" element={<AdminHomePage />} />

                <Route path="TripDetails" element={<TripDetailsPage />} />

                <Route path="CreateTrip" element={<CreateTripPage />} />

            </Routes>

        </BrowserRouter>
    )
}

export default RouterPage