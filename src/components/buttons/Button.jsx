import React from "react";
import '../../styles/buttons/Buttons.css';

export default function AddButton(props) {
    return (
        <div className="add-button">{props.name}</div>
    )
}