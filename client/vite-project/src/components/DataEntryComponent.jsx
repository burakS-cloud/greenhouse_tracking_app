import { useState } from "react";
import { Form } from "react-router-dom";
// import "./app.css";
import DataEntryComponentCSS from "./DataEntry.module.css"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect";
import axios from 'axios';
import { useForm } from "react-hook-form";



const DataEntryComponent = (props) => {
  const { handleSubmit } = useForm();
  const [values, setValues] = useState({
    alisTarihi: "",
    tur: "",
    miktar: "",
    miktarTuru: "",
    fiyat: "",
    İşlem: ""  
  });

  const inputs = [
    {
      id: 1,
      name: "alisTarihi",
      type: "date",
      placeholder: "Alış Tarihi",
      // errorMessage:
      //   "Geçerli bir tarih giriniz.",
      label: "Alış Tarihi",
    //   pattern: "^[A-Za-z0-9]{2,25}$",
      // required: true,
    },
    {
      id: 2,
      name: "tur",
      type: "select",
      placeholder: "Türü",
      // errorMessage: "Geçerli bir tür seçiniz",
      label: "Tür",
      // required: true,
    },
    {
      id: 3,
      name: "miktar",
      type: "number",
      placeholder: "Miktar",
      errorMessage: "Geçerli bir miktar giriniz",
      label: "Miktar",
      required: true,
    },
    {
      id: 4,
      name: "miktarTuru",
      type: "select",
      placeholder: "Miktar Türü",
      // errorMessage: "Geçerli bir miktar türü seçiniz",
      label: "Miktar Türü",
      // required: true,
    },
    {
      id: 5,
      name: "fiyat",
      type: "number",
      placeholder: "Fiyat",
      errorMessage: "Geçerli bir fiyat giriniz.",
      label: "Fiyat",
      required: true,
    },
    {
      id: 6,
      name: "İşlem",
      type: "select",
      placeholder: "İşlem",
      // errorMessage: "Geçerli bir işlem türü seçiniz.",
      label: "İşlem",
      // required: true,
    },
    
    // {
    //   id: 3,
    //   name: "birthday",
    //   type: "date",
    //   placeholder: "Birthday",
    //   label: "Birthday",
    // },
    // {
    //   id: 4,
    //   name: "password",
    //   type: "password",
    //   placeholder: "Password",
    //   errorMessage:
    //     "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    //   label: "Password",
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //   required: true,
    // },
    // {
    //   id: 5,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  // const handleSubmit = async(e) => {

  //   const response = await axios.post(`http://localhost:4000/api/tohum`,
  //               {
                  
  //               },
  //               {
  //                 headers: { "Content-Type": "application/json" },
  //               }
  //             );
  //             if (response.data) {
  //               console.log(response.data);
  //             }
  //           }


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log("values:", values)
  return (
    <div className={DataEntryComponentCSS.dataEntryWrapper}>
      <form className={DataEntryComponentCSS.dataEntryForm} onSubmit={handleSubmit(async (data, event) => {
        event.preventDefault();
        const formData = new FormData();
              formData.append("form", {
                fiyat: data?.fiyat,
                miktar: data?.miktar,
              });
        const response = await axios.post(`http://localhost:4000/api/tohum`,
                {
                  // fakeDataForNow: {fiyat:150, miktar:280}
                  form: { fiyat: values?.fiyat, miktar: values?.miktar },
                },
                {
                  headers: { "Content-Type": "application/json" },
                }
              );
              if (response.data) {
                console.log(response.data);
              }
      })}>
        <h1 className={DataEntryComponentCSS.dataEntryHeader}>{props.title}</h1>
        {inputs.map((input) => {
            return (
                input.type === "select" ? <FormSelect key={input.id} {...input} value={values[input.name]} onChange={onChange}/> : <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            )
            
        })}
        <button className={DataEntryComponentCSS.dataEntryButton}>Kaydet</button>
      </form>
    </div>
  );
};

export default DataEntryComponent;