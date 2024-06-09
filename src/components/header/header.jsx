import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/headers/header.css';

function Header() {
    return (
        <div>       
            <ul className="headerList">
                <li className="headerElement">
                    <Link to="/main">Главная</Link>
                </li>
                <li className="headerElement">
                    <Link to="/topics/">Темы</Link>
                </li>
                <li className="headerElement">
                    <Link to="/about/">О нас</Link>
                </li>      
                <li className="headerElement">
                    <Link to="/">Авторизация</Link>
                </li>         
            </ul>
        </div>

    );
}

export default Header;