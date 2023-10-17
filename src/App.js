import FormControl from './FormControl.js';
import './App.css';

function App() {
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
  

  return (
    <form>
      {formObjects.map((formObject,index) => (
          <FormControl  key={index} inputType={formObject.inputType} label={formObject.label} options={formObject.options} />
      ))}
    </form>
  );
}

export default App;



