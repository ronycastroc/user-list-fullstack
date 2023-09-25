import { useCallback, useRef } from "react";
import BoxContent from "../../components/BoxContent";
import Form from "../../components/Form";
import { Content } from "./style";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { postUser } from "../../services/user";
import { UserForm } from "../../models";

export default function Home() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const confirmPassRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback(async () => {
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !passRef.current?.value ||
      !confirmPassRef.current?.value
    ) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    if (passRef.current?.value !== confirmPassRef.current?.value) {
      alert("As senhas devem ser iguais!");
      return;
    }

    const body: UserForm = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      password: passRef.current?.value ?? "",
    }

    try {
      await postUser(body);
      resetForm();

      alert("foi");
    } catch (error) {
      alert(error);
    }
  }, []);

  function resetForm() {
    if (nameRef.current) {
      nameRef.current.value = "";
    }
    if (emailRef.current) {
      emailRef.current.value = "";
    }
    if (passRef.current) {
      passRef.current.value = "";
    }
    if (confirmPassRef.current) {
      confirmPassRef.current.value = "";
    }
  }

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
          <Button onClick={handleSubmit}>Enviar</Button>       
      </BoxContent>
    </Content>
  );
}