import React, { useState } from "react";
import { toast} from "react-toastify"
import Cookies from 'universal-cookie';
import '../../styles/authorize/Signin.css';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authorize = async (username, password) => {
        await fetch('http://158.160.165.219:8080/authenticate', {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({
           username: username,
           password: password
        }),
        headers: {

           'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            toast.success("Успешная авторизация");
            const cookies = new Cookies();
            cookies.set('Authtoken', data.token, { path: '/' });
            navigate("/main");
        })
        .catch((err) => {
           console.log(err.message);
           console.error(err);
        });
        };
        const handlePasswordChange = event => {
            setPassword(event.target.value);
            console.log(password);
          };
          const handleUsernameChange = event => {
            setUsername(event.target.value);
            console.log(username);
          };
    return (
        <div className="sign-in-container">
            <form>
                <div className="sign-in-title-container">Авторизация</div>
                <div className="sign-in-name-container">
                    <div>Введите ник:</div>
                    <input type="text" size="20" placeholder=" Ваше имя пользователя" onChange={handleUsernameChange} required></input>
                </div>
                <div className="sign-in-password-container">
                    <div>Введите пароль:</div>
                    <input type="text" size="20" placeholder=" Ваш пароль" onChange={handlePasswordChange} required></input>
                </div>   
                <div className="sign-in-submit-profile">
                    <button type="button" onClick={()=>authorize(username, password)} >Отправить</button>
                </div>
            </form>
        </div>
    )
}