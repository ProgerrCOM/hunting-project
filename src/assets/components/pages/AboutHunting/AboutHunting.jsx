import UsAboutHunting from "./UsAboutHunting/UsAboutHunting.jsx";
import CardsAboutHunting from "./CardsAboutHunting/CardsAboutHunting.jsx";
import './aboutHunting.css'
import MapAboutHunting from "./MapAboutHunting/MapAboutHunting.jsx";

const AboutHunting = () => {
    return (
        <div className="aboutHunting">
            <UsAboutHunting/>
            <CardsAboutHunting/>
            <MapAboutHunting/>
        </div>
    );

};


export default AboutHunting;