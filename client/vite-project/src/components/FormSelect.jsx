import { useState } from "react";
import FormInputCSS from "./FormInput.module.css";

const FormSelect = (props) => {
  const { label, errorMessage, onChange, id, turArr, miktarTuruArr, islemArr, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  // console.log("props inside formselect:",props);
  // console.log("turArr:", turArr);
  // console.log("inputProps in formselect:",inputProps);

  const renderData = () => {
    if(props.turArr !== undefined) {
      if(inputProps.name === 'tur'){
        return turArr.map((tur,i) => <option key={i} value={tur}>{tur}</option>)
      }
    }
    if(props.miktarTuruArr !== undefined){
      if(inputProps.name === 'miktarTuru'){
        return miktarTuruArr.map((tur,i) => <option key={i} value={tur}>{tur}</option>)
      }
    }
     if(props.islemArr !== undefined){
      if(inputProps.name === 'İşlem'){
        return islemArr.map((tur,i) => <option key={i} value={tur}>{tur}</option>)
      }
    }
  }

  return (
    <div className={FormInputCSS.formInput}>
      <label className={FormInputCSS.labelFormData}>{label}</label>
      <select
        className={FormInputCSS.selectData}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      >
        {renderData()}
      </select>
      <span className={FormInputCSS.spanFormData}>{errorMessage}</span>
    </div>
  );
};

export default FormSelect;