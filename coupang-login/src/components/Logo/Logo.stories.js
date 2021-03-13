import Logo from "./Logo";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Logo",
  component: Logo,
  argTypes: {
    label: {
      description: "로고 이름 (스크린 리더에서 읽힘)",
      defaultValue: { summary: "쿠팡" },
    },
    mode: {
      description: "로고 타입 (3개 값 중 하나를 사용해야함)",
      defaultValue: { summary: "color" },
      control: {
        type: "select",
        options: ["color", "mono", "black"],
      },
    },
  },
};

// 스토리 컴포넌트 템플릿
const Template = (args) => <Logo {...args} />;
export const Colorful = Template.bind({});
export const Mono = Template.bind({});
export const Black = Template.bind({});
// Logo 컴포넌트에 전달인자 (args) 설정

Colorful.args = {
  mode: "colorful",
  label: "쿠팡 노말",
};

Mono.args = {
  mode: "mono",
  label: "쿠팡 모노",
};

Black.args = {
  mode: "black",
  label: "쿠팡 블랙",
};
