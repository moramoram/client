import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`;

export const CropperBox = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  button {
    position: absolute;
    left: calc(50% - 90px);
    bottom: 18%;

    width: 180px;
    margin: auto;
  }
`;

export const ImgBox = styled.div`
  img {
    border-radius: 8px;
  }
`;
