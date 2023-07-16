import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './assets/components/pages/Home/Home';
import AboutHunting from './assets/components/pages/AboutHunting/AboutHunting';
import Header from './assets/components/pages/Home/Header/Header';
import Navbar from './assets/components/pages/Home/Header/Navbar/Navbar';

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutHunting" element={<AboutHunting />} />
            </Routes>
        </Router>
    );
}

export default App;
