import React from "react";
import { useState, useMemo } from "react";
import { themes } from "../data/themes";
import { useTheme } from "../context/useThemeContext";

const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();
  const themeNames = useMemo(() => Object.keys(themes), [themes]);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (themeName: string) => {
    setTheme(themeName);
    setIsOpen(false);
  };
  return (
    <div className="tw-relative tw-w-40">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tw-w-full tw-flex tw-items-center tw-justify-between tw-text-left tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-gray-700 tw-shadow-sm focus:tw-outline-none focus:tw-border-white hover:tw-border-gray-400 tw-transition-all"
      >
        <span>{theme}</span>
        {/* Chevron Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`tw-w-5 tw-h-5 tw-text-gray-500 tw-transform tw-transition-transform ${
            isOpen ? "tw-rotate-180" : "tw-rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div className="tw-absolute tw-bottom-full tw-mb-1 tw-w-full  tw-border-2 tw-border-gray-200 tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-z-10 tw-transition-transform tw-duration-200 tw-h-[500px] tw-overflow-y-scroll ">
          {themeNames.map((themeName, index) => (
            <div
              key={index}
              onClick={() => handleSelect(themeName)}
              className="tw-py-2 tw-px-4 tw-cursor-pointer hover:tw-bg-indigo-50 tw-transition-colors tw-ease-in-out"
            >
              {themeName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
