import React from "react";
import Header from "../components/header/header";
import '../styles/about/about.css';

function About() {
    return(
            <div className="App">
                <Header></Header>
                <div className="about-container"> 
                <div className="about">
                    <h3 className="about-theme">Курсовая работа на тему "Разработка клиент-серверного фуллстек-приложения Анализатор текста"</h3>
                    <div className="about-student">Выполнил студент группы ИКБО-02-21 Козлова М.Е.</div>
                </div> 
            </div>
        </div>
    );
}

export default About;