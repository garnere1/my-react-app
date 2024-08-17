import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <ul class="tilesWrap">
        <li>
          <h2>01</h2>
          <h3>emilyanngarner.com</h3>
          <p>
            This website was written entirely from scratch by myself.
            <br></br>
            <br></br>
            Skills used: Javascript, React, HTML, CSS
          </p>
        </li>
        <li>
          <h2>02</h2>
          <h3>Custom Chatbot Generator</h3>
          <p>
          This Flask application will generate a chatbot for the user depending on the specifications and data that they put in. 
          The custom chatbot utilizes RAG (retrieval augmented generation) to use the users uploaded files as knowedge for the chtatbot.
            <br></br>
            <br></br>
            Skills used: Python, Flask, Langchain, Vector DB, OpenAI API, AI
          </p>
          <a href="https://github.com/garnere1/CustomChatbot" target = "_blank" rel="noreferrer noopener"><button>View on Github</button></a>
        </li>
        <li>
          <h2>03</h2>
          <h3>XML Parser for an interactive videogame</h3>
          <p>
            Program that parses and XML file to create the layout of a game. This game featured multiple
            interactive commands for the user and required them to complete tasks in order to advance.
            <br></br>
            <br></br>
            Skills used: C++, Full-stack development
          </p>
          <a href="https://github.com/garnere1/XMLParser-VideoGame.git" target = "_blank" rel="noreferrer noopener"><button>View on Github</button></a>
        </li>
        <li>
          <h2>04</h2>
          <h3>iOS React Native Fitness App</h3>
          <p>
          This app was created using react native and AWS to help fitness enthusiasts track, log, and graph their lifts over time.
          <br></br>
          <br></br>
          Skills used: AWS, React Native, JavaScript
          </p>
          <a href="https://github.com/garnere1/fitnessApp" target = "_blank" rel="noreferrer noopener"><button>View on Github</button></a>
        </li>
      </ul>
    </div>
  );
};
export default Projects;