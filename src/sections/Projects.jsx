import React from "react";
import img1 from "../assets/moneymaker1.png";
import img2 from "../assets/moneymaker2.png";
import img3 from "../assets/moneymaker3.png";
import img4 from "../assets/moneymaker4.png";
import img5 from "../assets/moneymaker5.png";
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Utvalt projekt</h2>
      <div className="project-card moneymaker">
        <div className="project-header">
          <span className="project-icon">🚀</span>
          <h3>Snart smäller det – MoneyMaker i App Store</h3>
        </div>
        <p className="project-desc">
          Ett platsbaserat mobilspel byggt i Swift med AR, AI och riktiga belöningar.
          Spelet kombinerar social status, verkliga platser och en marknadsplats för att ge användarna en unik spelupplevelse.<br />
        </p>
        {/* --- Galleri --- */}
        <div className="project-gallery">
          {[img1, img2, img3, img4, img5].map((src, idx) => (
            <img key={idx} src={src} alt={`MoneyMaker screenshot ${idx+1}`} />
          ))}
        </div>
        <ul className="project-tags">
          <li>Swift</li>
          <li>Firebase</li>
          <li>AI-integration</li>
          <li>Augmented Reality</li>
          <li>iOS</li>
          <li>UX/UI</li>
        </ul>
      </div>
    </section>
  );
}
