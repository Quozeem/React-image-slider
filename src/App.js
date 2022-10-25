import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Room from './components/Rooms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Facility from './components/Facilities'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <>
      {/* npm install react-router-dom */}
      <div>
        <Router>
       
          <Routes>
             <Route exact element={<Home />} path="/" />
            <Route element={<Room />} path="/room" />
          <Route element={<Contact />} path="/contact" />
         <Route element={<Facility />} path="/facilities" />
               </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
