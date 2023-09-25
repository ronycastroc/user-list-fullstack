import { useNavigate } from "react-router-dom";
import BoxContent from "../../components/BoxContent";
import Button from "../../components/Button";
import { ButtonTopContent, Content } from "../Home/style";
import Title from "../../components/Title";
import { AiOutlineHome } from "react-icons/ai";

export default function List() {
  const navigate = useNavigate();

  function homeNavigate() {
    navigate("/");
  }

  return (
    <Content>
      <ButtonTopContent>
        
        <Button onClick={homeNavigate}><AiOutlineHome /> Cadastro de Usuário</Button>
      </ButtonTopContent>
      <BoxContent>
        <Title>Lista de Usuários</Title>
      </BoxContent>
    </Content>
  );
}