import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
export default function Topics_edit() {
    const cookies = new Cookies();
    const token = "Bearer " + cookies.get("Authtoken");
    const [themeInput, setThemeInput] = useState(""); 
    const [output, setOutput] = useState("");
    const affectTheme = async (action, payload) => {
        await fetch('http://158.160.165.219:8080/request-payload', {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({
           command: action,
           payload: payload
        }),
        headers: {
            'Authorization' : token,
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
           setOutput(data.payload)
        })
        .catch((err) => {
           console.log(err.message);
           console.error(err);
        });
        };
    function submitButtons(props) {
        let matches = themeInput.match(/\S+/g) || []; // Если нет совпадений, то присвоить пустой массив
            console.log(matches)
            if (matches.length == 0) {
                return (
                    <div>Название темы не может быть пустым.</div>
                );
            }
            else {
                return( <div className="topic-buttons-container">
                <div className="sign-in-submit-profile">
                    <button type="button" onClick={() => affectTheme("Add", themeInput)}>Добавить</button>
                </div>   
                <div className="sign-in-submit-profile">
                    <button type="button" onClick={() => affectTheme("Remove", themeInput)}>Удалить</button>
                </div>   
            </div>    );
            }
        }
        const handleThemeInputChange = event => {
            setThemeInput(event.target.value);
            console.log(themeInput);
          };
    return (
        <div className="output-container">
             <div className="output-title-container">Редактировать темы:</div>
             <div className="input-text-area-container">
                        <div>Введите тему:</div>
                        <input type="text" placeholder=" Тема" onChange={handleThemeInputChange} required></input>
                    </div> 
                       {submitButtons()}
        </div>
    )
    
}