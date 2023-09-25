import { useNavigate } from "react-router-dom";
import BoxContent from "../../components/BoxContent";
import Button from "../../components/Button";
import { ButtonTopContent, Content } from "../Home/style";
import Title from "../../components/Title";
import { AiOutlineHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/user";
import { User } from "../../models";
import { TableContent } from "./style";
import TableActions from "../../components/TableActions";

export default function List() {
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const response: User[] = await getUsers();

      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [users, refresh]);

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
        <TableContent>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Data de Criação</th>
                <th>Data de Atualização</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td>
                    <TableActions id={user.id} refresh={refresh} setRefresh={setRefresh}/>                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContent>

      </BoxContent>
    </Content>
  );
}