import { Wrapper } from "./style";

interface BoxContentProps {
  children: React.ReactNode;
}

export default function BoxContent({ children }: BoxContentProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}