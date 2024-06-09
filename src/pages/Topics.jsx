import React from "react";
import Header from "../components/header/header";
import Topics_edit from "../components/topics_components/Topics_edit.jsx";
import Topics_safe from "../components/topics_components/Topics_safe.jsx";
import '../styles/topics/topics.css'

export default function Topics() {
        return (
            <div>
                <Header></Header>
                <div className="topics-out-container">
                    <Topics_edit></Topics_edit>
                    <Topics_safe></Topics_safe>
                </div>
            </div>        
        )
    }