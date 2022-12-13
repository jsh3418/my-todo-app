import { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants/constant";

const List = styled.li`
  width: 360px;
  height: 40px;
  display: flex;
  align-items: center;

  border-bottom: 0.5px solid #000000;

  font-size: 20px;
`;

const CheckBox = styled.input`
  transform: scale(2);
  margin-left: 15px;
  margin-right: 15px;
`;

const EditButton = styled.button`
  margin-left: auto;
`;

const DeleteButton = styled.button`
  margin-left: 5px;
  margin-right: 10px;
`;

function Todo({ todo, fetchData }) {
  const [checked, setChecked] = useState(todo.checked);

  const deleteData = () => {
    return fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "DELETE",
    });
  };

  const editData = (content) => {
    return fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
        content,
        checked,
      }),
    });
  };

  const checkData = () => {
    fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
        content: todo.content,
        checked: !todo.checked,
      }),
    });
  };

  const handleDeleteButtonClick = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteData();
      fetchData();
    }
  };

  const handleEditButtonClick = async () => {
    const editContent = prompt("수정하실 내용을 적어주세요");
    if (editContent) {
      await editData(editContent);
      fetchData();
    }
  };

  const handleCheckBoxClick = () => {
    setChecked(!checked);
    checkData();
  };

  return (
    <List>
      <CheckBox type="checkbox" checked={checked} onChange={handleCheckBoxClick}></CheckBox>
      <span style={checked ? { opacity: 0.3, textDecoration: "line-through" } : {}}>{todo.content}</span>
      <EditButton onClick={handleEditButtonClick}>수정</EditButton>
      <DeleteButton onClick={handleDeleteButtonClick}>삭제</DeleteButton>
    </List>
  );
}

export default Todo;
