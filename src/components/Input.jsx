import styled from "styled-components";

const TodoInputWrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 360px;
  height: 60px;
  top: 600px;

  border-top: 1px solid #000000;
`;

const TodoInput = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 298px;
  height: 40px;

  margin-top: 5px;
  margin-left: 10px;

  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const CheckButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 320px;
  margin-top: 10px;
`;

function Input() {
  return (
    <TodoInputWrapper>
      <TodoInput />
      <CheckButton>V</CheckButton>
    </TodoInputWrapper>
  );
}

export default Input;
