import AboutAnimalMain from "./AboutAnimalMain/AboutAnimalMain.jsx";
import ListAboutAnimals from "./ListAboutAnimals/ListAboutAnimals.jsx";
import {useEffect} from "react";


const AboutAnimals = () => {
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
        <div>
            <AboutAnimalMain/>
            <ListAboutAnimals/>
        </div>
    );
};

export default AboutAnimals;