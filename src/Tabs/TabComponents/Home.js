import React from "react";
import "./Home.css";
import computer from "../../Assets/computer.png"

const Home = () => {
  return (
    <div className="home">
      <img src={computer} className="computer" alt="computer" />
      <div className="HomeText">
        <h1>About Me:</h1>
        <p>Studied Computer Engineering at Purdue University. Expertise in the software development of AI and GenAI applications. 
          Experience in building RAG applications from the ground up utilizing a vector database. 
          Expert knowledge in AI tools such as Langchain, HuggingFace, etc. Well versed in framworks such as Node.JS or Flask and in dev tools such as Docker and git.
        </p>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>SQL</li>
            <li>MATLAB</li>
            <li>Langchain</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>OpenAI</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Agile Methodology</li>
            <li>Hugging Face</li>
            <li>Tensorflow</li>
            <li>Pytorch</li>
            <li>Git</li>
            <li>Azure</li>
            <li>GCP</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;