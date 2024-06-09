import React from "react";
import Header from '../components/header/header.jsx';
import Analyzer from "../components/main_components/Analyzer.jsx";
import '../styles/main/main.css'
import AnalyzerOutput from "../components/main_components/AnalyzerOut.jsx";


function Main() {
    return (
        <div>
            <Header></Header>
            <Analyzer></Analyzer>
        </div>
        
    )
}
export default Main;
