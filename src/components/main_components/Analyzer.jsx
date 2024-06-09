import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
export default function Analyzer() {
    const [output, setOutput] = useState("");
    const [textInput, textInputChanged] = useState("");
    const cookies = new Cookies();
    const token = "Bearer " + cookies.get("Authtoken");
    const analyzeText = async (payload) => {
        await fetch('http://158.160.165.219:8080/request-payload', {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({
           command: "Text",
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
        const handleTextInputChange = event => {
            textInputChanged(event.target.value);
            console.log(textInput);
          };
    function submitButton(props) {
    let matches = textInput.match(/\S+/g) || []; // Если нет совпадений, то присвоить пустой массив
        console.log(matches)
        if (matches.length < 2) {
            return (
                <div>Текст должен состоять минимум из двух слов.</div>
            );
        }
        else {
            return( <button type="button"  onClick={() => analyzeText(textInput)} >Отправить</button>);
        }
    }
    return (
        <div className="analyzer-out-container">
        <div className="analyzer-container">
                <div>
                    <div className="sign-in-title-container">Анализ текста</div>
                    <div className="input-text-area-container">
                        <div>Введите текст:</div>
                        <textarea type="text" value={textInput}
        onChange={handleTextInputChange} placeholder=" Ваш текст" required></textarea>
                    </div> 
                    <div className="sign-in-submit-profile">
                    {submitButton()}
                    </div>
                </div>
                
            </div>
            <div className="output-container">
            <div className="output-title-container">Готовый анализ текста: {output} </div> 
        </div>
        </div>
            
    );
}