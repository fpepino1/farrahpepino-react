import React from "react";
import "./Home.css";
import profile from "./fp_profile.jpeg";



export default function Home() {
  document.body.style = 'background: #EAEFFD;';

  return (
    <div className="Home" id="Home">
      <div className="container">
        <div className="row">
          <div className="col-5 position-absolute top-50 start-10 translate-middle-y">
            <div style={{ fontFamily: 'Montserrat', fontSize:'25px' }}>
          
              <div style={{ color: '#B66E69 ', fontSize:'55px', fontWeight:'bold'}}>FARRAH PEPINO.</div><div><strong style={{color:'#544544'}}>SOFTWARE ENGINEER </strong>BASED IN JC/NYC.</div>
            </div> <br /> <br />
            Hey! It's Farrah! I enjoy coding and designing. I'm currently open to internships and full-time roles in the tech sector. Let's collaborate and create something amazing together!
            <br /> <br />
           <button>Contact Me</button> <button>See Projects</button>
          </div>
          <div className="col-5 position-absolute top-50 end-0 translate-middle-y">
            <img className="profile" src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
