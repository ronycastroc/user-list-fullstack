import { MutableRefObject } from 'react';
import { FormContent } from './style';

interface FormProps {
  label: string;
  type: string;
  placeHolder: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

export default function Form({ label, type, placeHolder, inputRef }: FormProps) {
  return (
    <FormContent>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        ref={inputRef}
      />
    </FormContent>
  );
}