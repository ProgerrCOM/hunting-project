import AboutFormContact from "./AboutFormContact/AboutFormContact.jsx";
import {useEffect} from "react";

const AboutForm = () => {
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
            <AboutFormContact/>
        </div>
    );
};

export default AboutForm;