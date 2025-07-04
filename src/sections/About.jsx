import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import TerminalCard from '../components/TerminalCard';

const terminalPrompt = "> pnpm dlx mehmedvrana@portfolio init";
const terminalLines = [
  " ✔ Design checks. ",
  " ✔ Setting up portfolio framework. Using React.js. ",
  " ✔ Implementing responsive design with CSS/SCSS ",
  " ✔ Creating component architecture. ",
  " ✔ Building project showcase section. ",
  " ✔ Adding skills and expertise section. ",
  " ✔ Optimizing images and assets. ",
  "",
  " Success! Portfolio initialization completed. ",
  " Launching soon at mehmedvrana.se "
];

export default function About() {
  const [typedPrompt, setTypedPrompt] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    setTypedPrompt("");
    setTypingDone(false);
    setVisibleCount(0);

    const typingInterval = setInterval(() => {
      if (i < terminalPrompt.length) {
        setTypedPrompt(prev => prev + terminalPrompt.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingDone(true);
      }
    }, 65);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  useEffect(() => {
    if (!typingDone) return;
    let j = 0;
    const lineInterval = setInterval(() => {
      setVisibleCount((count) => {
        if (count < terminalLines.length) return count + 1;
        clearInterval(lineInterval);
        return count;
      });
      j++;
      if (j >= terminalLines.length) clearInterval(lineInterval);
    }, 500);

    return () => clearInterval(lineInterval);
  }, [typingDone]);

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-8 md:px-16 flex justify-center items-center min-h-[60vh]"
      ref={terminalRef} 
    >
      <TerminalCard>
        <pre className="font-mono text-base whitespace-pre">
          <span className="text-white">
            {typedPrompt}
            {!typingDone && <span className="animate-pulse">|</span>}
          </span>
          {"\n"}
          {terminalLines.slice(0, visibleCount).map((line, i) => (
            <span key={i} className="text-green-400">{line + "\n"}</span>
          ))}
          {typingDone && visibleCount < terminalLines.length && (
            <span className="text-green-400 animate-pulse">|</span>
          )}
        </pre>
      </TerminalCard>
    </section>
  );
}
