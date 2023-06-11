import React from "react";
import "./Home.css";
import computer from "../../Assets/computer.png"

const Home = () => {
  return (
    <div className="home">
      <img src={computer} className="computer" alt="computer" />
      <div className="HomeText">
        <h1>About Me:</h1>
        <p>I am a programmer who is highly interested in software development.
          In May 2022, I graduated from Purdue University with a degree in computer engineering.
          Shortly after, I started working as a Tech Architecture Delivery Analyst. During this time,
           I have worked hard to keep up with my existing skills as well as developing new ones. 
        </p>
      </div>
    </div>
  );
};
export default Home;