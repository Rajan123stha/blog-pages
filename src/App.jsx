import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

const sections = [
  "Gemini Era",
  "Multimodality and long context",
  "AI agents",
  "Breaking new ground",
  "Search",
  "More intelligent Gemini experiences",
  "Responsible AI",
  "Creating the future",
];

const App = () => {
  const [currentSection, setCurrentSection] = useState("Gemini Era");

  const handleScroll = () => {
    const sectionOffsets = sections.map((section) => {
      const element = document.getElementById(section.replace(/ /g, "-"));
      return { section, offset: element.offsetTop };
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i].offset) {
        setCurrentSection(sectionOffsets[i].section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex mt-16">
        <Sidebar
          currentSection={currentSection}
          onSectionClick={setCurrentSection}
        />
        <div className="flex-1 p-6 md:pl-64">
          <MainContent currentSection={currentSection} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
