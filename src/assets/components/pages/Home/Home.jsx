import { useEffect } from "react";
import Main from "./Main/Main.jsx";

const Home = () => {
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
            <Main />
        </div>
    );
};

export default Home;
