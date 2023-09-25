import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ActionContainer, DeleteButton, EditButton } from "./style";
import { deleteUser } from "../../services/user";

interface TableActionsProps {
  id: number;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export default function TableActions({ id, refresh, setRefresh }: TableActionsProps) {
  async function handleDelete() {
    const confirmDelete = window.confirm("Tem certeza que deseja apagar este usuário?");

    if (confirmDelete) {
      try {
        await deleteUser(id);

        setRefresh(!refresh);
      } catch (error) {
        alert(error);
      }
    }
  }
  
  return (
    <ActionContainer>
      <EditButton onClick={() => { }}>
        <AiFillEdit />
      </EditButton>
      <DeleteButton onClick={handleDelete}>
        <AiFillDelete />
      </DeleteButton>
    </ActionContainer>
  );
}