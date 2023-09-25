import { HeaderContent, Title } from "./style";
import logo from "../../assets/images/user.png"

export default function Header() {
  return (
    <HeaderContent>
      <img src={logo} alt="user-logo" />
      <Title>User List</Title>
    </HeaderContent>
  );
} 