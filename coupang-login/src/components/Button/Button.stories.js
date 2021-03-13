import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

// 스토리 컴포넌트 템플릿
const Template = (args) => <Button {...args} />;
export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});
export const PrimaryDisabledButton = Template.bind({});
export const SecondaryDisabledButton = Template.bind({});
// Primary 컴포넌트에 전달인자 (args) 설정

PrimaryButton.storyName = "Primary";
PrimaryButton.args = {
  mode: "primary",
  state: "normal",
  children: "로그인",
};

SecondaryButton.storyName = "Secondary";
SecondaryButton.args = {
  mode: "secondary",
  state: "normal",
  children: "회원가입",
};

PrimaryDisabledButton.storyName = "Primary (Disabled)";
PrimaryDisabledButton.args = {
  mode: "primary",
  state: "disabled",
  children: "로그인",
};

SecondaryDisabledButton.storyName = "Secondary (Disabled)";
SecondaryDisabledButton.args = {
  mode: "secondary",
  state: "disabled",
  children: "회원가입",
};

// Logo
// Template <- Logo
// Logo
// args: { type } // colorful, mono, black
