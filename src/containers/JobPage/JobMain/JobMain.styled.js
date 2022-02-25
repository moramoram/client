import styled from "styled-components";
import { SubNavbar } from "@/components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
  margin: auto;
`;

export const StickyNavBox = styled.div`
  padding-top: 86px;
`;

export const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

export const CardGridBox = styled.div`
  width: calc(100% - 320px);
  padding-top: 80px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 0.5rem;

  max-width: 940px;

  > div {
    flex-grow: 1;
  }
`;

export const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 940px;

  padding: 20px 0px 20px 0;
  margin-bottom: 20px;
`;
