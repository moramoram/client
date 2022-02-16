import React from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { themeState } from "@/recoil/theme";

import { Button } from "@/components";
import { colors, fontSize, lineHeight, fontWeight } from "@/_shared";

const NotFoundPage = () => {
  const theme = useRecoilValue(themeState);

  return (
    <Layout>
      <svg
        width="625"
        height="171"
        viewBox="0 0 625 171"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1491_30185)">
          <path
            d="M269.979 149.632C249.735 132.878 248.353 96.0357 267.973 62.9435C287.179 30.5475 320.004 12.7286 345.307 19.383C281.225 41.8185 334.622 127.5 269.979 149.632Z"
            fill="#4A83EF"
          />
          <path
            d="M362.027 113.585C341.504 148.199 305.438 166.171 279.609 155.432C345.744 133.546 290.657 46.3941 356.847 24.5352C380.072 39.9526 382.627 78.8367 362.027 113.585Z"
            fill="#4A83EF"
          />
        </g>
        <path
          d="M115.548 133.931V110.796L175.424 17.5635H195.313V49.7459H183.366L145.175 109.276V110.381H230.12V133.931H115.548ZM184.264 159V126.887L184.678 116.597V17.5635H212.302V159H184.264Z"
          fill="#4A83EF"
        />
        <path
          d="M395.548 133.931V110.796L455.424 17.5635H475.313V49.7459H463.366L425.175 109.276V110.381H510.12V133.931H395.548ZM464.264 159V126.887L464.678 116.597V17.5635H492.302V159H464.264Z"
          fill="#4A83EF"
        />
        <defs>
          <clipPath id="clip0_1491_30185">
            <rect
              width="122"
              height="140.529"
              fill="white"
              transform="translate(254 18)"
            />
          </clipPath>
        </defs>
      </svg>

      <Title theme={theme}>요청하신 페이지를 찾을 수 없어요.</Title>
      <Button>메인으로 돌아가기</Button>
    </Layout>
  );
};

export default NotFoundPage;

const titleColor = {
  light: colors.gray900,
  dark: colors.gray25,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > svg {
    width: 100%;
  }
`;

const Title = styled.div`
  padding: 2rem 0 6rem 0;

  line-height: ${lineHeight.h2};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.h2};
  color: ${(props) => titleColor[props.theme]};

  transition: 0.3s;

  @media screen and (max-width: 530px) {
    padding: 0rem 0 4rem 0;
    line-height: ${lineHeight.h4};
    font-size: ${fontSize.h4};
  }
`;
