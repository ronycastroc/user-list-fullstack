import { useLocation, useNavigate } from "react-router-dom";
import { ButtonBottonContent, ButtonTopContent, Content } from "../Home/style";
import { BsSend } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import Button from "../../components/Button";
import BoxContent from "../../components/BoxContent";
import Form from "../../components/Form";
import Title from "../../components/Title";
import { useState } from "react";
import { PartialUserForm } from "../../models";
import { updateUser } from "../../services/user";

export default function EditUser() {
  const { id, name, email } = useLocation().state;
  const [editName, setEditName] = useState<string>(name);
  const [editEmail, setEditEmail] = useState<string>(email);
  const navigate = useNavigate();

  const listNavigate = () => {
    navigate("/user-list");
  };

  const handleSubmit = async () => {
    const body: PartialUserForm = {
      name: editName,
      email: editEmail
    }

    try {
      await updateUser({ id, body });

      setEditName("");
      setEditEmail("");

      navigate("/user-list");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Content>
      <ButtonTopContent>
        <Button onClick={listNavigate}><ImCancelCircle />  Cancelar</Button>
      </ButtonTopContent>
      <BoxContent>
        <Title>Atualizar Usuário</Title>
        <Form
          label="Nome"
          type="text"
          placeHolder="Digite o nome do usuário"
          value={editName}
          onChange={(e) => setEditName(e.target.value)} />
        <Form
          label="E-mail"
          type="email"
          placeHolder="Digite o e-mail do usuário"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)} />
        <ButtonBottonContent>
          <Button onClick={handleSubmit}><BsSend /> Atualizar</Button>
        </ButtonBottonContent>
      </BoxContent>
    </Content>
  );
}