import React from "react";
import "./Home.css";
import logo1 from "./logo2.png";
import profile from "./fp_profile.jpeg"

export default function Home(){
    document.body.style = 'background: #EAEFFD;';

    return(
        
    <div className="Home" id="Home"><div class="container-xxl">
    <div class="row">
  
    <div class="col-5 position-absolute top-50 start-10 translate-middle-y"> Hello! My name is <br/>
    <img class="top-50 logo1" src={logo1} alt="logo"/> <br/>   <span>Software Engineer, based in JC/NYC</span> I enjoy coding and getting creative. I'm currently open to internships and full-time roles in the tech sector. Let's collaborate and create something amazing together!
    <br/> <br/> <button>Contact Me</button> <button>See Projects</button></div>
    <div class="col-5 position-absolute top-50 end-0 translate-middle-y"><img className="profile" src={profile} alt="profile"/>
    </div>
  </div>
  </div> 
  </div>

    );
}