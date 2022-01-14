import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { NavbarItem } from "./NavbarItem";

import { Logo } from "../Logo/Logo";
import { Toggle } from "../Toggle/Toggle";
import { Icon } from "../Icon/Icon";
import { color } from "../shared/styles";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;

  background-color: ${color.white};
  border-bottom: 1px solid ${color.gray200};
`;

const StyledNavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavbarItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;
`;

const StyledNavbarRight = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

// const StyledLogo = styled.

export function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavbarLeft>
        <Logo width="100" height="26" />
        <StyledNavbarItems>
          <NavbarItem status="active">커뮤니티</NavbarItem>
          <NavbarItem>스터디</NavbarItem>
          <NavbarItem>취업정보</NavbarItem>
        </StyledNavbarItems>
      </StyledNavbarLeft>
      <StyledNavbarRight>
        <Toggle />
        <Icon icon="bell" stroke={color.gray400} aria-hidden />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20C0 8.95431 8.95431 0 20 0V0C31.0457 0 40 8.95431 40 20V20C40 31.0457 31.0457 40 20 40V40C8.95431 40 0 31.0457 0 20V20Z"
            fill="#F1F3F5"
          />
          <g clip-path="url(#clip0_447_15831)">
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0V0C31.0457 0 40 8.95431 40 20V20C40 31.0457 31.0457 40 20 40V40C8.95431 40 0 31.0457 0 20V20Z"
              fill="#F1F3F5"
            />
            <path
              d="M40 34.9887V40.0004H0V35.007C2.32658 31.8978 5.34651 29.3743 8.81965 27.6371C12.2928 25.9 16.1233 24.9971 20.0067 25.0004C28.18 25.0004 35.44 28.9237 40 34.9887ZM26.67 14.9987C26.67 16.7668 25.9676 18.4625 24.7174 19.7127C23.4671 20.963 21.7714 21.6654 20.0033 21.6654C18.2352 21.6654 16.5395 20.963 15.2893 19.7127C14.039 18.4625 13.3367 16.7668 13.3367 14.9987C13.3367 13.2306 14.039 11.5349 15.2893 10.2847C16.5395 9.03441 18.2352 8.33203 20.0033 8.33203C21.7714 8.33203 23.4671 9.03441 24.7174 10.2847C25.9676 11.5349 26.67 13.2306 26.67 14.9987Z"
              fill="#CED4DA"
            />
          </g>
          <defs>
            <clipPath id="clip0_447_15831">
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0V0C31.0457 0 40 8.95431 40 20V20C40 31.0457 31.0457 40 20 40V40C8.95431 40 0 31.0457 0 20V20Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </StyledNavbarRight>
    </StyledNavbar>
  );
}
