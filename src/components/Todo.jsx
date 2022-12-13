import styled from "styled-components";
import { BASE_URL } from "../constants/constant";

const List = styled.li`
  width: 360px;
  height: 40px;
  display: flex;
  align-items: center;

  font-size: 20px;

  border-bottom: 0.5px solid #000000;
`;

const CheckBox = styled.input`
  width: 36px;
  transform: scale(2);
`;

const EditButton = styled.button`
  margin-left: auto;
`;

const DeleteButton = styled.button`
  margin-left: 5px;
  margin-right: 10px;
`;

function Todo({ todo, fetchData }) {
  const deleteData = () => {
    fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "DELETE",
    });
  };

  const handleDeleteButton = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteData();
      fetchData();
    }
  };

  return (
    <List>
      <CheckBox type="checkbox"></CheckBox>
      <span>{todo.content}</span>
      <EditButton>수정</EditButton>
      <DeleteButton onClick={handleDeleteButton}>삭제</DeleteButton>
    </List>
  );
}

export default Todo;
