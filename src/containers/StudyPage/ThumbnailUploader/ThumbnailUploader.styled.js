import styled from "styled-components";
import { Button } from "@/components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CropperBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  left: calc(50% - 90px);
  bottom: 18%;

  width: 180px;
  margin: auto;
`;

export const ImgBox = styled.div`
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;
