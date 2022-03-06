import styled from "styled-components";
import { SubNavbar } from "@/components";

export const Layout = styled.section`
  display: flex;
  justify-content: space-between;

  max-width: 1280px;
  padding: 0 20px 20px 20px;
  margin: auto;
`;

export const StickyNavBox = styled.nav`
  padding-top: 86px;
`;

export const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;

export const CardGridBox = styled.section`
  width: calc(100% - 300px);
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
