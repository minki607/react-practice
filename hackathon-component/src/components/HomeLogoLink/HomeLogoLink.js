import { Link } from "react-router-dom";
import { LogoText } from "./HomeLogoLink.styled";

const HomeLogoLink = ({ children }) => {
  return (
    <h1 lang="en">
      <Link
        to={{
          pathname: "/",
        }}
      >
        <LogoText>{children}</LogoText>
      </Link>
    </h1>
  );
};

export default HomeLogoLink;
