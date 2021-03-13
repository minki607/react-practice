import CheckBox from "./CheckBox";

export default {
  title: "CheckBox",
  component: CheckBox,
};

// 스토리 컴포넌트 템플릿
const Template = (args) => <CheckBox {...args} />;
export const Normal = Template.bind({});
export const Checked = Template.bind({});
export const Disabled = Template.bind({});
// Primary 컴포넌트에 전달인자 (args) 설정

Normal.args = {
  title: "autoLogin",
  checked: false,
  label: "자동 로그인",
};

Checked.args = {
  title: "autoLogin",
  checked: true,
  label: "자동 로그인",
};

Disabled.args = {
  title: "autoLogin",
  checked: false,
  label: "자동 로그인",
  disabled: true,
};

// Logo
// Template <- Logo
// Logo
// args: { type } // colorful, mono, black
