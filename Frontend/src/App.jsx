// Componenets
import Home from "./components/Home";
import Create from "./components/Create";
import About from "./components/About";
import Navbar from "./components/NavBar";

// Routes
import { Routes, Route } from "react-router-dom";

// Styles
import './App.css'

function App() {
  const myWidth = 220;
  return (
    <>
      <Navbar
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        }
      />
    </>
  );
}

export default App;
