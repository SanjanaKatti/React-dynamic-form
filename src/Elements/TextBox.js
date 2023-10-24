
import { useForm, Controller } from "react-hook-form";

function TextBox({ name, id, value, placeholder, maxLength, label }) {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={id}
            {...field}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            required
          />
        )}
      />
    </div>
  );
}

export default TextBox;
