import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>
        I'm a passionate front-end developer with experience in building
        responsive and interactive web applications using modern technologies
        like React, JavaScript, HTML, and CSS.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪🏻" color="#123456" />
      <Skill skill="JavaScript" emoji="💪🏻" color="orange" />
      <Skill skill="Web Design" emoji="💪🏻" color="yellow" />
      <Skill skill="Git and Github" emoji="👍🏻" color="orangered" />
      <Skill skill="React" emoji="💪🏻" color="aqua" />
      <Skill skill="Svelte" emoji="👶🏻" color="red" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
