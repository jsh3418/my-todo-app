import { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants/constant";

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

function Input({ fetchData }) {
  const [value, setValue] = useState("");

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postData();
    fetchData();
    setValue("");
  };

  const postData = () => {
    return fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: value,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoInputWrapper>
        <TodoInput onChange={handleChangeInput} value={value} />
        <CheckButton onclick={handleSubmit}>V</CheckButton>
      </TodoInputWrapper>
    </form>
  );
}

export default Input;
