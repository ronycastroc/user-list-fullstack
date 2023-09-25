import { ButtonContent } from "./style";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <ButtonContent>
      <p>{children}</p>
    </ButtonContent>
  );
}