import styled from "styled-components";

export const Layout = styled.aside`
  display: block;
  border-radius: 16px;
  width: 400px;
  height: 540px;

  button {
    margin: 6px 10px;
    width: calc(100% - 20px);
  }
  .thumbnail {
    margin-bottom: 12px;
  }
`;

export const SideBarBox = styled.div`
  margin: 10px 0px;
`;

export const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
`;
