import FormControl from './FormControl.js';
import React from "react";
import './App.css';
import { useForm, FormProvider } from "react-hook-form";

function App() {
  const methods = useForm();
  const {handleSubmit} = methods
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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formObjects.map((formObject,index) => (
            <FormControl  key={index} inputType={formObject.inputType} label={formObject.label} options={formObject.options} />
        ))}
      </form>
    </FormProvider>
  );
}

export default App;



