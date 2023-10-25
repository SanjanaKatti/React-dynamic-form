
import { useForm } from "react-hook-form";

const Input = ({label, register, required }) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required : "This field is required "})} />
    </>
)
function TextBox({ name, id, value, placeholder, maxLength, label }) {
    const {
        register
    } = useForm();
    
  return (
    <div>
      <Input
      label={label}
      id={id}
      placeholder={placeholder} 
      maxLength={maxLength} 
      value={value}
      register={register}
      required/>
    </div>
  );
}

export default TextBox;
