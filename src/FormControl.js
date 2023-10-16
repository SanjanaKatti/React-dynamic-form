import TextBox from './Elements/TextBox';
import Submit from './Elements/Submit';
import Radio from './Elements/Radio';
import DropDown from './Elements/DropDown';
function FormControl({inputType,ddOptions,roptions}) {
    switch(inputType)
        {
            case "text": return <TextBox name="Sanjana" id="UserName" value="hello" placeHolder="Enter your name" maxLength="30" label="TextBox"/>
            case "submit": return <Submit value="Submit"/>
            case "time": return <div><input type={inputType}/></div>
            case "radio": return <Radio name="fav_language" type={inputType} options={roptions}/>
            case "number": return <div><input type={inputType}/></div>
            case "date": return <div><input type={inputType}/></div>
            case "dropdown": return<div><DropDown name="Options" options={ddOptions}/></div>
            default : return <div>HI</div>
        }
}

export default FormControl;