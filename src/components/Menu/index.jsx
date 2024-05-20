import styled from "styled-components";

const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  background: #fff;
  padding-top: 100px;
  transform: translateX(-100%);
  will-change: transform;
`;

const MenuLayout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  list-style: none;
`;

const MenuStyle = styled.li`
  cursor: pointer;
  color: var(--background);
  display: block;
  margin: 0;
  transform-origin: -20px 50%;
  font-weight: bold;
  font-size: 48px;
  color: #000;
  padding: 10px;
  list-style: none;
  will-change: transform, opacity, filter;
`;

export function Menu() {
  return (
    <MenuWrapper>
      <MenuLayout>
        <MenuStyle>Portfolio</MenuStyle>
        <MenuStyle>About Me</MenuStyle>
        <MenuStyle>Guest Book</MenuStyle>
      </MenuLayout>
    </MenuWrapper>
  );
}
