import React from "react";
import '../../styles/authorize/SignUp.css'

export default function SignUp() {
    return (
        <div className="sign-up-container">
            <form>
                <div className="sign-up-title-container">Регистрация</div>
                <div className="sign-up-name-container">
                    <div>Введите ник:</div>
                    <input type="text" size="20" placeholder=" Ваше имя" required></input>
                </div>
                <div className="sign-up-name-container">
                    <div>Повторите ник:</div>
                    <input type="text" size="20" placeholder=" Ваша фамилия" required></input>
                </div>
                <div className="sign-up-password-container">
                    <div>Введите пароль:</div>
                    <input type="text" size="20" placeholder=" Ваша почта" required></input>
                </div>
                <div className="sign-up-password-container">
                    <div>Повторите пароль:</div>
                    <input type="text" size="20" placeholder=" Ваш пароль" required></input>
                </div> 
                <div className="sign-in-submit-profile">
                    <input type="submit" value="Отправить"/>
                </div>  
            </form>
        </div>
    )
}