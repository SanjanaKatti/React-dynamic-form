function Radio({name,type,options}){
    return(
    <div>
        {options.map((option)=> (
            <div key={option.id}>
                <input type={type} id={option.id} name={name} value={option.value}/>
                <label for={option.id}>{option.value}</label><br />
            </div>
        ))}
    </div>
    );
}
 export default Radio;