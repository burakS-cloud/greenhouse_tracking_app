import { useState } from "react";
// import "./formInput.css";
import FormInputCSS from "./FormInput.module.css"

const FormSelect = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={FormInputCSS.formInput}>
      <label>{label}</label>
      <select
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormSelect;