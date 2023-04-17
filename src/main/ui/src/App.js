import './assets/css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from './pages/Products';
import Customers from './pages/Customers';
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <div className="header">
                        <span></span>
                    </div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/customers" element={<Customers />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App;
