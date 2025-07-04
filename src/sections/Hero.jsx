import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CodeSimple, Stack, Lightning } from "phosphor-react";
import avatarBox from "../assets/Avatar.png";
import './Hero.css';

const skills = [
  "React", "ReactNative", "Angular", "JavaScript", "TypeScript", "Swift", "LowCode", "C#", "API", "Node.js", "SQL", "SSH & bash", "UI/UX"
];

const highlights = [
  {
    title: "Clean Code",
    description: "Skapar eleganta och hållbara lösningar",
    icon: (
      <CodeSimple size={54} color="#C084FC" weight="regular" /> 
    ),
  },
  {
    title: "Component Architecture",
    description: "Bygger skalbara, återanvändbara system",
    icon: (
      <Stack size={54} color="#60A5FA" weight="regular" />        
    ),
  },
  {
    title: "Performance",
    description: "Optimering för hastighet och effektivitet",
    icon: (
      <Lightning size={54} color="#FACC15" weight="regular" />   
    ),
  }
];

export default function Hero() {
  return (
    <section className="hero-root">
      <div className="hero-container">
        {/* Vänster */}
        <div className="hero-avatar">
          <img src={avatarBox} alt="Mehmed AI Avatar" className="avatar-img" />
        </div>
        {/* Höger */}
        <div className="hero-content">
          <h1>Mehmed Vrana</h1>
          <h2>FRONTEND & INTEGRATION DEVELOPER</h2>
          <p className="hero-tagline">
            Passionerad utvecklare med känsla för design, ren kod och moderna webblösningar.<br />
            Jag brinner för att bygga snabba, snygga och användarvänliga gränssnitt – gärna med React, API-integrationer och fokus på UI/UX. Alltid med kvalitet och användarupplevelse i första hand.
          </p>
          <div className="hero-social">
            <a href="https://github.com/Mehmedinho" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/mehmed-vrana-868b24121/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
            <a href="mailto:meme-vrana@live.se"><FaEnvelope size={24} /></a>
          </div>
          <a href="#projects" className="hero-btn">🚀 Se mitt projekt</a>
          <div className="hero-skills">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>

          <div className="highlights-outer">
            <div className="highlights-row">
              {highlights.map(({ title, description, icon }, i) => (
                <div key={title} className={`highlight-card highlight-card-${i}`}>
                  <div className="highlight-icon">{icon}</div>
                  <div>
                    <div className="highlight-title">{title}</div>
                    <div className="highlight-desc">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
