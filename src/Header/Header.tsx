import React from "react";

const Header = () => {
  return (
    <header className="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-justify-center tw-pt-8 ">
      <div className="tw-flex tw-gap-2 ">
        <img
          height={36}
          width={36}
          src="/src/assets/logo.svg"
          alt="TakTik logo"
        />
        <h1 className="tw-text-4xl tw-font-bold ">Taktik </h1>
      </div>
      <p className="">
        - Inspired by{" "}
        <a
          className="tw-underline tw-underline-offset-4"
          href="https://monkeytype.com/"
        >
          MonkeyType
        </a>{" "}
        &{" "}
        <a
          className="tw-underline tw-underline-offset-4"
          href="https://www.eletypes.com/"
        >
          ElleTypes
        </a>
      </p>
    </header>
  );
};

export default Header;
