import styled from "styled-components";
import { SubNavbar } from "@/components";

export const Layout = styled.div`
  padding: 20px;
`;

export const MainBox = styled.div`
  display: flex;
  gap: 100px;

  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 0 4rem 0;
`;

export const MobileBox = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 0 4rem 0;
`;

export const ContentBox = styled.div`
  width: 100%;
  margin-right: 20px;
`;

export const StickyNavBox = styled.div`
  padding-top: 86px;
`;

export const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
`;
