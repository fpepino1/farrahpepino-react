import React from "react";
import Navigation from "./Navigation";
import Contact from "./Contact";
// import Footer from "./Footer";
import Home from "./Home";
import "./Theme.css"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';




function App() {
  return (
    <div className="App" >
    <Navigation />
    <Home/>
    {/* <Footer/> */}
    <Contact/>
    </div>
    
  );
}

export default App;
