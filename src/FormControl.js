import TextBox from './Elements/TextBox';
import Submit from './Elements/Submit';
import Radio from './Elements/Radio';
import DropDown from './Elements/DropDown';
function FormControl({inputType,options,label}) {
    switch(inputType)
        {
            case "text": return <TextBox name="Full Name" id="UserName" placeHolder="Enter your name" maxLength="30" label={label}/>
            case "submit": return <Submit value="Submit" label={label}/>
            case "time": return <div><input type={inputType}/></div>
            case "radio": return <Radio name="fav_language" type={inputType} options={options}/>
            case "number": return <div><input type={inputType}/></div>
            case "date": return <div><input type={inputType}/></div>
            case "dropdown": return<div><DropDown name="Options" options={options}/></div>
            default : return <div>HI</div>
        }
}

export default FormControl;