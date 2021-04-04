import React from "react";
import Navigation from "components/Navigation/Navigation";
import { Header } from "./HeaderBar.styled";

const HeaderBar = () => {
  return (
    <Header>
      <Navigation />
    </Header>
  );
};

export default HeaderBar;
