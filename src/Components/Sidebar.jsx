import React, { useState } from "react";

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

const Sidebar = ({ currentSection, onSectionClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white w-full md:w-64 fixed top-16 left-0 z-10 md:z-auto md:static md:h-full lg:fixed">
      <div className="md:hidden p-4">
        <button
          className="w-full text-left text-xl font-bold mb-6"
          onClick={handleDropdownToggle}
        >
          In this story
          <span className="float-right">{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isDropdownOpen && (
          <ul className="space-y-4">
            {sections.map((section) => (
              <li
                key={section}
                className={`cursor-pointer font-medium ${
                  currentSection === section ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => onSectionClick(section)}
              >
                <a href={`#${section.replace(/ /g, "-")}`}>{section}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="hidden md:block p-6 ml-8">
        <h3 className="text-xl font-bold mb-6 mt-16 ">In this story</h3>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section}
              className={`cursor-pointer font-medium ${
                currentSection === section ? "text-blue-500" : "text-gray-700"
              }`}
              onClick={() => onSectionClick(section)}
            >
              <a href={`#${section.replace(/ /g, "-")}`}>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
