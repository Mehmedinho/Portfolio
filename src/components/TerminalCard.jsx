import React from "react";
import './TerminalCard.css';

export default function TerminalCard({ children }) {
  return (
    <div className="relative bg-[#18191e] border border-[#22232c] rounded-2xl shadow-xl max-w-2xl mx-auto overflow-hidden mt-8 px-8 py-6">
      {/* Header-lampor */}
      <div className="flex space-x-2 px-4 pt-3 pb-2">
        <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
      </div>
      {/* Terminal text */}
      <pre className="terminal-card-terminal">
        {children}
      </pre>
    </div>
  );
}
