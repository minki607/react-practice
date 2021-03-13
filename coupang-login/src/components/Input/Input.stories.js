import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

// 스토리 컴포넌트 템플릿
const Template = (args) => <Input {...args} />;
export const EmailInput = Template.bind({});
export const PasswordInput = Template.bind({});

EmailInput.storyName = "Input (Email)";
EmailInput.args = {
  type: "email",
  label: "아이디 (이메일)",
  visible: true,
};

EmailInput.storyName = "Input (Password)";
PasswordInput.args = {
  type: "password",
  label: "비밀번호",
  visible: false,
};
