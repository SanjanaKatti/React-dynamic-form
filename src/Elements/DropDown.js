function DropDown({name,options}){
    return(
        <div>
            <label htmlFor={name}>Choose one: </label>
            <select  name={name} id={name}>
            {options.map((option) =>
                <option key={option.key} value={option.key}>{option.label}</option>
            )}
             </select>
        </div>
    )
}
export default DropDown;