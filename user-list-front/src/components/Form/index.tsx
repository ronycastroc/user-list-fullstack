import { FormContent } from './style';

interface FormProps {
  label: string;
  value: string;
  type: string;
  placeHolder: string;
  onChange: (value: string) => void;
}

export default function Form({ label, value, type, placeHolder, onChange }: FormProps) {
  return (
    <FormContent>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormContent>
  );
}