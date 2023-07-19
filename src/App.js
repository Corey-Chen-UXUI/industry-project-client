// Imports
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Feature from "./Pages/Feature/Feature";

// NPM Imports
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
