import { button, primary, secondary } from "./Button.module.scss";

const Button = ({ type, children, mode, state, className, ...restProps }) => {
  return (
    <button
      type={type}
      disabled={state === "normal" ? false : true}
      className={`${className} ${button} ${
        mode === "primary" ? primary : secondary
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  mode: "primary",
  state: "normal",
  children: "버튼",
};

export default Button;
