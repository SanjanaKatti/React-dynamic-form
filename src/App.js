// import FormControl from './FormControl.js';
import React from "react";
import './App.css';
import { useForm } from 'react-hook-form';
const Input = ({ label, register, required,errors }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required:"Full name required" })} />
    {errors[label] && <p className="error-message">{errors[label].message}</p>}
  </>
);

const Select = React.forwardRef(({ name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref}>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
    </select>
  </>
));

function App() {
  const { 
    register,
    handleSubmit,
    formState: {errors},
        } = useForm();
  const formObjects = [
    {
      "inputType" : "text",
      "label" : "Full Name",
    },
    {
      "inputType" : "dropdown",
      "label": "Gender",
      "options" :[
        { "key": "opt1", "label": "Male" },
        { "key": "opt2", "label": "Female" },
        { "key": "opt3", "label": "Others" },
      ]
    },
    {
      "inputType" : "submit",
      "label" : "Submit"
    },
  ]
  const onSubmit = (data) => console.log(data);
  return (
    // <form onSubmit={(data) => console.log(data)}>
    //   {formObjects.map((formObject,index) => (
    //       <FormControl  key={index} inputType={formObject.inputType} label={formObject.label} options={formObject.options} />
    //   ))}
    // </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Full Name" register={register} required={true} errors={errors}/>
      <Select label="Gender" {...register("Gender")}/>
      <input type="submit"/>
    </form>
  );
}

export default App;



