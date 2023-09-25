import { MutableRefObject } from 'react';
import { FormContent } from './style';

interface FormProps {
  label: string;
  type: string;
  placeHolder: string;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({ label, type, placeHolder, inputRef,  value, onChange }: FormProps) {
  return (
    <FormContent>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        ref={inputRef}
        value={value}
        onChange={onChange}
        required
      />
    </FormContent>
  );
}