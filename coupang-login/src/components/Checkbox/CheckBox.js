import {
  input,
  checkBoxContainer,
  checkBox,
  inputLabel,
} from "./CheckBox.module.scss";

const CheckBox = ({ title, label, checked, disabled }) => {
  return (
    <div className={checkBoxContainer}>
      <input
        className={input}
        id={`${title}CheckBox`}
        type="checkbox"
        checked={checked}
        disabled={disabled}
      />
      <span className={checkBox}></span>
      <label className={inputLabel} htmlFor={`${title}CheckBox`}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
