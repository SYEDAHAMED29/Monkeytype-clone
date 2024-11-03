import React from "react";
import ThemeDropdown from "./ThemeDropdown";

const Footer = () => {
  return (
    <footer className="tw-py-4">
      <div className=" sm:tw-mx-8 tw-mx-2 tw-flex tw-items-center tw-justify-between ">
        {/* Dropdown */}
        <ThemeDropdown />
        <div>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.syedahamed.in/"
              className="tw-underline tw-underline-offset-4"
            >
              Syed Ahamed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
