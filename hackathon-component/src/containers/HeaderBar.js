import React from "react";
import { header } from "./HeaderBar.module.scss";
import Navigation from "components/Navigation/Navigation";

const HeaderBar = () => {
  return (
    <header className={header}>
      <Navigation />
    </header>
  );
};

export default HeaderBar;
