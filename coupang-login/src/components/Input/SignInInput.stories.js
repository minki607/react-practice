import SignInInput from "./SignInInput";

export default {
  title: "Input",
  component: SignInInput,
};

// 스토리 컴포넌트 템플릿
const Template = (args) => <SignInInput {...args} />;
export const EmailSignIn = Template.bind({});
export const PasswordSignIn = Template.bind({});

EmailSignIn.args = {
  type: "email",
  label: "아이디 (이메일)",
  state: "normal",
  hasError: true,
  visible: true,
};

PasswordSignIn.args = {
  type: "password",
  label: "비밀번호",
  state: "normal",
  hasError: true,
  visible: false,
};
