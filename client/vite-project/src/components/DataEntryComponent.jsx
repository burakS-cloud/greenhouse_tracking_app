import { useState } from "react";
// import "./app.css";
import DataEntryComponentCSS from "./DataEntry.module.css"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom"



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
  // console.log("props:", props);

  const location = useLocation();
  const pathname = location.pathname;

  console.log("pathname var:", pathname)

   const miktarTuruArr = [
    "Miktar Türü Seçiniz",
    "Kg",
    "Adet"
   ]

   const islemArr = [
    "İşlem Seçiniz",
    "Ekle",
    "Çıkart"
   ]

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const finalizedToday = `${yyyy}-${mm}-${dd}`

  const inputs = [
    {
      id: 1,
      name: "alisTarihi",
      type: "date",
      placeholder: "Alış Tarihi",
      dateFormat: "dd-mm-yyyy",
      min: finalizedToday,
      errorMessage:"Geçerli bir tarih giriniz.",
      label: "Alış Tarihi",
      required: true,
    },
    {
      id: 2,
      name: "tur",
      type: "select",
      placeholder: "Türü",
      errorMessage: "Geçerli bir tür seçiniz",
      label: "Tür",
      required: true,
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
      errorMessage: "Geçerli bir miktar türü seçiniz",
      label: "Miktar Türü",
      required: true,
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
      errorMessage: "Geçerli bir işlem türü seçiniz.",
      label: "İşlem",
      required: true,
    },
    
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log("values:", values)
  // console.log("turArr in dataentry:", props?.turArr)
  return (
    <div className={DataEntryComponentCSS.dataEntryWrapper}>
      <form className={DataEntryComponentCSS.dataEntryForm} onSubmit={handleSubmit(async (data, event) => {
        event.preventDefault();
        const formData = new FormData();
              formData.append("form", {
                fiyat: data?.fiyat,
                miktar: data?.miktar,
              });
        const response = await axios.post(`http://localhost:4000/api${pathname}`,
                {
                  fiyat: values?.fiyat,
                  miktar: values?.miktar,
                  miktarTuru: values?.miktarTuru,
                  islem: values?.İşlem,
                  tur: values?.tur,
                  alisTarihi: values?.alisTarihi

                  // fakeDataForNow: {fiyat:150, miktar:280}
                  // form: { fiyat: values?.fiyat, miktar: values?.miktar },
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
                // input.type === "select" && input.id === 2 ? <FormSelect balikTurArr={props.turArr} key={input.id} {...input} value={values[input.name]} onChange={onChange}/> : input.type === "select" ? <FormSelect key={input.id} {...input} value={values[input.name]} onChange={onChange}/> : <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                input.type === "select" ? <FormSelect miktarTuruArr={miktarTuruArr} islemArr={islemArr} turArr={props.turArr} key={input.id} {...input} value={values[input.name]} onChange={onChange}/> : <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            )
            
        })}
        <button className={DataEntryComponentCSS.dataEntryButton}>Kaydet</button>
      </form>
    </div>
  );
};

export default DataEntryComponent;