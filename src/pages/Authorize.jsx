import React from "react";
import SignUp from "../components/authorize/SignUp.jsx";
import SignIn from "../components/authorize/SignIn.jsx";
import '../styles/authorize/authorize.css';

export default function Authorize() {
    return (
        <div className="authorize-container">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}