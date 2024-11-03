import React from "react";
import { useTheme } from "./context/useThemeContext";
import { themes } from "./data/themes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Typebox from "./Typebox/Typebox";

const App = () => {
  const { theme } = useTheme();

  const backgroundColor = themes[theme]?.background; // Fallback to white
  const outlineColor = themes[theme].colors[0]; // Fallback to black

  return (
    <main
      className={`tw-w-full tw-min-h-screen tw-flex tw-flex-col `}
      style={{ backgroundColor: backgroundColor, color: outlineColor }}
    >
      <Header />
      <div className="tw-flex-grow">
        <Typebox />
      </div>
      <Footer />
    </main>
  );
};

export default App;
