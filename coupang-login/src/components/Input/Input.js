import React from "react";
import Icon from "components/Icon/Icon";
import { input, inputField } from "./Input.module.scss";

const Input = ({ type, label, state, visible, ...restProps }) => {
  if (type === "email")
    return (
      <div className={inputField}>
        <input
          className={input}
          type={type}
          placeholder="아이디(이메일)"
          {...restProps}
        />
      </div>
    );
  else if (type === "password") {
    return (
      <div className={inputField}>
        <input
          className={input}
          type={visible ? "text" : type}
          placeholder="패스워드"
          {...restProps}
        />
        {visible ? <Icon type="show" /> : <Icon type="hide" />}
      </div>
    );
  } else return null;
};

export default Input;
