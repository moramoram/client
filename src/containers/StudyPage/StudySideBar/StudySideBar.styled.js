import styled from "styled-components";

export const Layout = styled.aside`
  display: block;
  position: sticky;
  top: 180px;

  width: 400px;
  height: 540px;
  border-radius: 16px;

  button {
    margin: 6px 10px;
    width: calc(100% - 20px);
  }
  .thumbnail {
    margin-bottom: 12px;
  }
`;

export const SideBarItemBox = styled.ul`
  margin: 10px 0px;
  padding: 0;
`;

export const BadgeBox = styled.ul`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
  padding: 0;

  li {
    margin-left: 4px;
  }
`;
