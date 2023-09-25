import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ActionContainer, DeleteButton, EditButton } from "./style";
import { deleteUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { User } from "../../models";

interface TableActionsProps {
  user: User;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export default function TableActions({ user, refresh, setRefresh }: TableActionsProps) {
  const navigate = useNavigate();

  async function handleDelete() {
    const confirmDelete = window.confirm("Tem certeza que deseja apagar este usuário?");

    if (confirmDelete) {
      try {
        await deleteUser(user.id);

        setRefresh(!refresh);
      } catch (error) {
        alert(error);
      }
    }
  }
  
  function handleEdit() {
    navigate("/edit-user", { state: { id: user.id, name: user.name, email: user.email }})
  }

  return (
    <ActionContainer>
      <EditButton onClick={handleEdit}>
        <AiFillEdit />
      </EditButton>
      <DeleteButton onClick={handleDelete}>
        <AiFillDelete />
      </DeleteButton>
    </ActionContainer>
  );
}