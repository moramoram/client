import styled from "styled-components";

export const SideBarBox = styled.div`
  margin: 10px 0px;
`;

export const BadgeBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 10px;
  div {
    margin-left: 4px;
  }
`;

export const Layout = styled.div`
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
