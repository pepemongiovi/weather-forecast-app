import { FilledInput, InputLabel } from "@mui/material"
import { FormInputSection } from "./FormInput.styles"

interface FormInputProps {
  label: string;
  value: any;
  type?: string;
  onChange: (value: any) => void;
}

const FormInput = ({ label, value, onChange, type = 'text' }: FormInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormInputSection variant='filled' sx={{ width: '100%' }}>
      <InputLabel htmlFor={label.toLowerCase()}>{label}</InputLabel>
      <FilledInput id={label.toLowerCase()} {...{ type }} value={value || ''} onChange={handleChange} />
    </FormInputSection>

  )
}

export default FormInput