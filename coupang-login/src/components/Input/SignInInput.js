import Input from "./Input";
import Icon from "components/Icon/Icon";
import { signIn, iconContainer, errMsg, errOutline } from "./Input.module.scss";

const SignInInput = ({
  className,
  width,
  height,
  type,
  state,
  label,
  hasError,
  ...restProps
}) => {
  const renderErrorMessage = () => {
    if ((type === "email" || type === "password") && state === "normal") {
      return `${label}를 입력해주세요`;
    } else if (type === "email" && state === "inputed") {
      return `${label}는 이메일 형식으로 입력해주세요`;
    } else return `다시한번 확인해주세요`;
  };

  return (
    <>
      <div
        style={{ width, height }}
        className={`${className} ${signIn} ${
          hasError ? errOutline : ""
        }`.trim()}
      >
        <div className={iconContainer}>
          <Icon width={45} type={type} />
        </div>
        <Input type={type} {...restProps} />
      </div>
      {hasError ? (
        <span className={errMsg} role="alert">
          {renderErrorMessage()}
        </span>
      ) : null}
    </>
  );
};

export default SignInInput;
