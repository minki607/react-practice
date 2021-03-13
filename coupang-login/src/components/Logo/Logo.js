import React from "react";
import { ReactComponent as Color } from "assets/logo/colorful.svg";
import { ReactComponent as Mono } from "assets/logo/mono.svg";
import { ReactComponent as Black } from "assets/logo/black.svg";

/* -------------------------------------------------------------------------- */

const Logo = ({ mode = "color", label = "쿠팡", ...restProps }) => {
  let Comp = null;
  switch (mode) {
    case "mono":
      Comp = Mono;
      break;
    case "black":
      Comp = Black;
      break;
    default:
      Comp = Color;
  }

  return <Comp title={label} {...restProps} />;
};

export default Logo;
