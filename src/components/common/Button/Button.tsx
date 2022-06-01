import { CircularProgress } from "@mui/material";
import { CustomButton } from "./Button.styles";

interface ButtonProps {
  active?: boolean;
  label: string;
  style?: Object;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ label, onClick, loading = false, disabled = false, style = {}, active = false }: ButtonProps) => {
  return (
    <CustomButton variant='contained' onClick={onClick} {...{ disabled }} {...{ style }} {...{ active }}>
      {loading ? <CircularProgress size={20} color='inherit' /> : label}
    </CustomButton>
  )
}