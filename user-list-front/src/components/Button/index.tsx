import { ButtonContent } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <ButtonContent onClick={onClick}>
      <p>{children}</p>
    </ButtonContent>
  );
}