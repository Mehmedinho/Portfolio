import React from "react";
import "./ExperienceTimeline.css";

const experiences = [
  {
    year: "2022 – 2025",
    title: "Expert Consultant",
    company: "Flowfactory",
    location: "Stockholm",
    desc: "Som Low Code utvecklare på FlowFactory har man utvecklat appar för Siemens, CIDAN och Region Stockholm. Arbetet har skett i nära samarbete med kunder, och applikationerna har utvecklats i FlowFactorys egna Low-Code-plattform. Integrerat API:er för Siemens HQPP, CIDAN via Jeeves samt Region Stockholms verksamhetsbidrag. För den sistnämnda integrationen har en AI-tjänst implementerats för att automatiskt scanna och analysera uppladdade filer. Som en del av ledarskapet har en praktikant fått stöd och vägledning i det dagliga arbetet genom en body-roll. Detta har bidragit till utveckling av coachande färdigheter samt erfarenhet av att introducera och handleda nya medarbetare."
  },
  {
    year: "2021 – 2022",
    title: "Frontend Developer",
    company: "Arbetsförmedlingen",
    location: "Remote/Stockholm",
    desc: "Som Frontendutvecklare på Arbetsförmedlingens huvudkontor utvecklades det en ny tjänst som inte har funnits tidigare. Man jobbade nära ett poc-team samt ux-designerna. Applikationen utvecklades med ramverket Angular samt programmeringsspråken JavaScript, TypeScript, HTML och CSS."
  },
  {
    year: "2020 – 2020",
    title: "Fullstack Webbutvecklare",
    company: "Roods media",
    location: "Stockholm",
    desc: "Anställningen var ett tidsbegränsat uppdrag. Utvecklade hemsidor i Wordpress, HTML, CSS, JavaScript, PHP, MySQL i backend och arbetade agilt."
  },
  {
    year: "2017 – 2019",
    title: "Utbildning: Applikationsutvecklare för mobila enheter",
    company: "Newtons Yrkeshögskola",
    location: "Stockholm",
    desc: "Heltidsstudier med fokus på applikationsutveckling, UX/UI och projektledning."
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Erfarenhet</h2>
      <div className="timeline-container">
        <div className="timeline-line" />
        <div className="timeline-items">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-header">
                  <span className="timeline-role">{exp.title}</span>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-location">{exp.location}</div>
                <div className="timeline-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
