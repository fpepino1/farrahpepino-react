import React from "react";
import Navigation from "./Navigation";
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
    </div>
    
  );
}

export default App;
