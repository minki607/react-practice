import { Link } from "react-router-dom";
import { LogoText } from "./HomeLogoLink.module.scss";

const HomeLogoLink = ({ children }) => {
  return (
    <h1 lang="en">
      <Link
        to={{
          pathname: "/",
        }}
      >
        <span className={LogoText}>{children}</span>
      </Link>
    </h1>
  );
};

export default HomeLogoLink;
