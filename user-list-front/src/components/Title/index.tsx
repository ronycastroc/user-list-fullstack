import { Text, TitleContent } from "./style";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <TitleContent>
      <Text>{ children }</Text>
    </TitleContent>
  );
}