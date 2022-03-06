import styled from "styled-components";
import { SubNavbar } from "@/components";

export const SubNavMobile = styled(SubNavbar)`
  padding: 20px 20px 0 20px;
`;

export const MobileCardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  max-width: 1280px;

  padding: 20px;
  margin: auto;
`;

export const SearchBox = styled.div`
  padding: 20px 20px 0 20px;
`;

export const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
