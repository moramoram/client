import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  left: calc(50% - 115px);
  bottom: 10%;
  margin: auto;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 8px;
  }
`;
