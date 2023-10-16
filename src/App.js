import FormControl from './FormControl.js';
import './App.css';
import './FormControl.js';
function App() {
  const roptions = [
    {id:"html", value:"HTML"},
    {id:"css", value:"CSS"},
    {id:"java", value:"JAVA"}
]
  const ddOptions = [
    {key:"opt1", label:"Option 1"},
    {key:"opt2", label:"Option 2"},
    {key:"opt3", label:"Option 3"},
  ] 
  return (
    
    <form>
    <FormControl inputType="text" />
    <FormControl inputType="submit" />
    <FormControl inputType="time" />
    <FormControl inputType="radio" roptions={roptions}/>
    <FormControl inputType="number" />
    <FormControl inputType="date" />
    <FormControl inputType="dropdown" ddOptions={ddOptions} />
    </form>
  );
}

export default App;
