import styled from "styled-components";

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
  margin-right: 10px;
`;

function Todo() {
  return (
    <List>
      <CheckBox type="checkbox"></CheckBox>
      할일 내용
      <EditButton>수정</EditButton>
      <DeleteButton>삭제</DeleteButton>
    </List>
  );
}

export default Todo;
