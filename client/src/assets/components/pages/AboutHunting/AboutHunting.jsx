import UsAboutHunting from "./UsAboutHunting/UsAboutHunting.jsx";
import CardsAboutHunting from "./CardsAboutHunting/CardsAboutHunting.jsx";
import './aboutHunting.css'
import MapAboutHunting from "./MapAboutHunting/MapAboutHunting.jsx";
import Team from "../Home/Main/Team/Team.jsx";
import {useEffect} from "react";
import Map from "../Map/Map.jsx";

const AboutHunting = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop();
    });
    return (
        <div className="aboutHunting">
            <UsAboutHunting/>
            <CardsAboutHunting/>
            <Team/>
            <Map/>
        </div>
    );

};


export default AboutHunting;