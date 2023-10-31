import { useFormContext } from "react-hook-form";

const Input = ({name, required }) => {
 const {register, formState: { errors }} = useFormContext(); 

 console.log(errors[name])
 return(
    <>
      <label>{name}</label>
      <input {...register(name, { required : "This field is required "})} />
      {errors[name] && <div>{errors[name].message}</div>}
    </>
 )
 }
function TextBox({ id, value, placeholder, maxLength, name}) {
 
  return (
    <div>
      <Input
      name={name}
      id={id}
      placeholder={placeholder} 
      maxLength={maxLength} 
      required/>
    </div>
  );
}

export default TextBox;
