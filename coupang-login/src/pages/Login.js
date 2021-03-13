import "./Login.scss";
import SignInInput from "components/Input/SignInInput";
import Logo from "components/Logo/Logo";
import React, { Component } from "react";
import CheckBox from "components/Checkbox/CheckBox";
import Button from "components/Button/Button";

export default class Login extends Component {
  render() {
    return (
      <form className="login-form">
        <Logo className="login-logo" />
        <SignInInput
          className="login-email"
          width={575}
          height={63}
          type="email"
        />
        <SignInInput
          className="login-password"
          width={575}
          height={63}
          type="password"
        />
        <div className="login-support">
          <CheckBox label="자동 로그인" />
          <a href="#findemail">아이디(이메일)/비밀번호 찾기</a>
        </div>
        <Button className="login-button" mode="primary">
          로그인
        </Button>
        <hr className="login-seperator" />
        <Button className="login-button" mode="secondary">
          회원가입
        </Button>
      </form>
    );
  }
}
