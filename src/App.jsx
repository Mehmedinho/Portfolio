import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import Projects from "./sections/Projects";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <main className="pt-20 px-4 max-w-4xl mx-auto space-y-24">
        <Hero />
        <ExperienceTimeline />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
