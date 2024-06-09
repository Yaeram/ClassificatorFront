import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
export default function Topics_safe() {
    const cookies = new Cookies();
    const token = "Bearer " + cookies.get("Authtoken");
    const [themes, setThemes] = useState("");
    const loadThemes = async () => {
        
        await fetch('http://158.160.165.219:8080/request-payload', {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({
           command: "List"
        }),
        headers: {
            'Authorization' : token,
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
           setThemes(data.payload)
        })
        .catch((err) => {
           console.log(err.message);
           console.error(err);
        });
        };
    
    useEffect(() =>{ loadThemes();}, [themes])
    return (
        <div className="topics-container">
                <form>
                    <div className="sign-in-title-container"> {themes}</div>
                </form>
            </div>
    )
}