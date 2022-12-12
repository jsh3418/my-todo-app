import styled from "styled-components";

const Title = styled.span`
  height: 24px;
  font-size: 22px;
  text-align: center;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid #9c9c9c;
  margin-right: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const MenuButtonImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;

function Header() {
  return (
    <header>
      <MenuButtonImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"></MenuButtonImg>
      <Title>📝 To-Do LIST</Title>
      <ProfileImg src="https://avatars.githubusercontent.com/u/57666791?v=4"></ProfileImg>
    </header>
  );
}

export default Header;
