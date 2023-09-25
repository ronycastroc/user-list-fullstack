import { useRef } from "react";
import BoxContent from "../../components/BoxContent";
import Form from "../../components/Form";
import { Content } from "./style";
import Button from "../../components/Button";
import Title from "../../components/Title";

export default function Home() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const confirmPassRef = useRef<HTMLInputElement | null>(null);

  return (
    <Content>
      <BoxContent>
        <Title>Cadastro de Usuários</Title>
        <Form
          label="Nome"
          type="text"
          placeHolder="Digite o nome do usuário"
          inputRef={nameRef} />
        <Form
          label="E-mail"
          type="email"
          placeHolder="Digite o e-mail do usuário"
          inputRef={emailRef} />
        <Form
          label="Senha"
          type="password"
          placeHolder="Digite a senha"
          inputRef={passRef} />
        <Form
          label="Confirmação de senha"
          type="password"
          placeHolder="Confirme a senha"
          inputRef={confirmPassRef} />      
          <Button>Enviar</Button>       
      </BoxContent>
    </Content>
  );
}