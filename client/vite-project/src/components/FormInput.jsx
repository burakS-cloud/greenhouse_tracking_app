import { useState } from "react";
// import "./formInput.css";
import FormInputCSS from "./FormInput.module.css"

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={FormInputCSS.formInput}>
      <label className={FormInputCSS.labelFormData}>{label}</label>
      <input
        className={FormInputCSS.inputData}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
      />
      <span className={FormInputCSS.spanFormData}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;