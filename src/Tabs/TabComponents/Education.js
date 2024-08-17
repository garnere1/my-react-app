import React from "react";
import "./Education.css"
import aws from "../../Assets/aws.png";
import azure from "../../Assets/azure.png";
import google from "../../Assets/google.png";

const Education = () => {
  return (
    <div className="Education">
      <div class="leftSec">
          <h1>Purdue University</h1>
          <h2>2018-2022</h2>
          <h3>Bachelor of Science in Computer Engineering</h3>
          <p>Course topics include: 
            <ul>
              <li>Advanced C programming</li>
              <li>Data structures in C</li>
              <li>Microprocessor systems and interfaces</li>
              <li>Computer graphics</li>
              <li>Object oriented programming in C++ and Java</li>
              <li>Computer communication networks</li>
            </ul></p>
      </div>

      <div class="rightSec">
          <h1>Certifications</h1>
          <p>*Click badges to view them*</p>
          <h2>AWS:</h2>
          <div class = "awsccp">
            <h3>AWS Certified Cloud Practitioner</h3>
            <p><a href="https://www.credly.com/badges/7e113688-566e-488a-b18d-2c056254564a/public_url" target = "_blank" rel="noreferrer noopener">
              <img src = {aws} alt = "aws"></img></a>
            </p>
          </div>
          <h2>Azure:</h2>
          <div class = "awsccp">
            <h3>Azure Fundamentals</h3>
            <p><a href="https://learn.microsoft.com/en-us/users/garneremily-5062/credentials/6f82f7be73a832c" target = "_blank" rel="noreferrer noopener">
              <img src = {azure} alt = "aws"></img></a>
            </p>
          </div>
          <h2>Google Cloud:</h2>
          <div class = "awsccp">
            <h3>Google Cloud Digital Leader</h3>
            <p><a href="https://www.credential.net/297695a6-a470-460e-82ec-3f95994753d9?key=e87d183e0bfc68826c79f274ed176c8b9d5ee0fbf20a059f523eb14ce2095205" target = "_blank" rel="noreferrer noopener">
              <img src = {google} alt = "aws"></img></a>
            </p>
          </div>
      </div>
    </div>
  );
};
export default Education;