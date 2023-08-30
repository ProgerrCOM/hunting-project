import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './assets/components/pages/Home/Home';
import AboutHunting from './assets/components/pages/AboutHunting/AboutHunting';
import Header from './assets/components/pages/Home/Header/Header';
import Navbar from './assets/components/pages/Home/Header/Navbar/Navbar';
import AboutAnimals from "./assets/components/pages/AboutAnimals/AboutAnimals.jsx";
import ItemDetails from "./assets/components/pages/ItemDetails/ItemDetailsInfo/ItemDetails.jsx";
import AboutForm from "./assets/components/pages/AboutForm/AboutForm.jsx";
import AnimalList from "./assets/admin/AnimalPanel.jsx";
import AdminPanel from "./assets/admin/AnimalPanel.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutHunting" element={<AboutHunting />} />
                <Route path="/aboutAnimals" element={<AboutAnimals />} />
                <Route path="/item/:itemId" element={<ItemDetails />} />
                <Route path="/aboutForm" element={<AboutForm/>}/>
                {/*<Route path="/adminAnimal" element={<AnimalList/>}/>*/}
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </Router>
    );
}

export default App;
