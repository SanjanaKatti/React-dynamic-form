function TextBox({name,id,value,placeHolder,maxLength,label})
{
    return(
        <div>
            <label>{label}</label>
            <input type="text" name={name} id={id} value={value} placeHolder={placeHolder} maxLength={maxLength}/>
        </div>
    );
}

export default TextBox;