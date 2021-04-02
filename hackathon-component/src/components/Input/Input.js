import {
  inputContainer,
  inputIconWrap,
  input,
  inputIcon,
  resetIconBtn,
} from "./Input.module.scss";

import { a11yHidden } from "styles/modules/common.module.scss";

import Icon from "components/Icon/Icon";

const Input = ({
  id,
  icon,
  name,
  label,
  placeholder,
  value,
  disabled,
  style,
  width,
  height,
  center,
  ...restProps
}) => {
  const customStyle = {
    ...style,
    height,
    width,
  };
  return (
    <div className={inputContainer} style={customStyle}>
      <label htmlFor={id} className={a11yHidden}>
        {label}
      </label>
      <div className={inputIconWrap}>
        <input
          id={id}
          name={name}
          className={input}
          placeholder={placeholder}
          disabled={disabled}
          style={{ textAlign: center ? "center" : "left" }}
          value={value}
          {...restProps}
        />

        {icon && (
          <>
            <button className={resetIconBtn}>
              <Icon type="reset" height={height - 25} />
            </button>
            <Icon
              className={inputIcon}
              height={height - 20}
              type={icon}
              alt={label}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
