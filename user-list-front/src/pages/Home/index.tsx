import BoxContent from "../../components/BoxContent";
import Form from "../../components/Form";
import { Content, Title} from "./style";

export default function Home() {
  return (
    <Content>
      <BoxContent>
        <Title>Cadastro de Usuários</Title>
        <Form 
          label="Nome" 
          value="" 
          type="text" 
          placeHolder="Digite o nome do usuário" 
          onChange={() => {}} />
        <Form 
          label="E-mail" 
          value="" 
          type="email" 
          placeHolder="Digite o e-mail do usuário" 
          onChange={() => {}} />
        <Form 
          label="Senha" 
          value="" 
          type="password" 
          placeHolder="Digite a senha" 
          onChange={() => {}} />
        <Form 
          label="Confirmação de senha" 
          value="" 
          type="password" 
          placeHolder="Confirme a senha" 
          onChange={() => {}} />
        
      </BoxContent>
    </Content>
  );
}