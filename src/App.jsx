import React, { useState } from "react";
import steveJobsImage from "./assets/JobsCareers-901568660.webp";
import "./index.css";

const ProfileCard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);

  const handleMouseEnter = () => {
    setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
  };

  const handleMouseLeave = () => {
    setBgColor(initialBgColor);
  };

  return (
    <div
      className="profile-card"
      style={{ background: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={steveJobsImage} alt={name} className="profile-pic" />
      <div className="profile-content">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ProfileCard
        name="Steve Jobs"
        bio="Innovator, entrepreneur, and co-founder of Apple Inc."
        initialBgColor="linear-gradient(135deg, #ADD8E6, rgb(146, 23, 23))"
      />
    </div>
  );
};

export default App;
