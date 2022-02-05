import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Avatar } from "@/components";
import { colors, fontSize, fontWeight, loadings } from "@/_shared";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

const FeedItemSmall = ({
  boardId,
  writerInfo,
  title,
  category,
  isLoading,
  ...props
}) => {
  if (isLoading) {
    boardId = 1;
    writerInfo = {
      nickname: "",
      ordinal: "",
      campus: "",
      authCheck: 0,
      avatar: "",
    };
    title = "";
    category = "";
  }

  return (
    <Layout isLoading={isLoading} {...props}>
      <ContentBox>
        <Category {...props}>{category}</Category>
        <Title {...props}>{title}</Title>
      </ContentBox>
      <Footer>
        <Avatar
          size="small"
          username={writerInfo.nickname}
          src={writerInfo.avatar}
        />
        <UserBox>
          <User {...props}>{writerInfo.nickname}</User>
          {writerInfo.ordinal && writerInfo.campus && (
            <UserDetail>
              ({writerInfo.ordinal}/{writerInfo.campus})
            </UserDetail>
          )}
        </UserBox>
      </Footer>
    </Layout>
  );
};

FeedItemSmall.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  writerInfo: PropTypes.object,
  title: PropTypes.string,
  category: PropTypes.string,
  isLoading: PropTypes.bool,
};

FeedItemSmall.defaultProps = {
  theme: THEME.LIGHT,
  writerInfo: null,
  title: "",
  category: "",
};

export default FeedItemSmall;

const bgColors = [
  { dark: "#2B421255", light: "#E6F4D7" },
  { dark: "#2B531455", light: "#E4FBCC" },
  { dark: "#084C2E55", light: "#D3F8DF" },
  { dark: "#134E4855", light: "#CCFBEF" },
  { dark: "#164C6355", light: "#CFF9FE" },
  { dark: "#0B4A6F55", light: "#E0F2FE" },
  { dark: "#19418555", light: "#D1E9FF" },
  { dark: "#00359E55", light: "#D1E0FF" },
  { dark: "#2D328255", light: "#E0EAFF" },
  { dark: "#491C9655", light: "#ECE9FE" },
  { dark: "#3E1C9655", light: "#EBE9FE" },
  { dark: "#6F187755", light: "#FBE8FF" },
  { dark: "#85165155", light: "#FCE7F6" },
  { dark: "#89123E55", light: "#FFE4E8" },
  { dark: "#771A0D55", light: "#FFE6D5" },
  { dark: "#77291755", light: "#FDEAD7" },
  { dark: "#713B1255", light: "#FEF7C3" },
];

const titleColor = {
  dark: colors.gray25,
  light: colors.gray900,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 150px;
  /* width: 300px; */
  padding: 24px;
  border-radius: 12px;

  background: ${(props) => bgColors[props.colorIdx][props.theme]};
  animation: ${(props) => props.isLoading && loadings[props.theme]};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin-bottom: 8px;

  color: ${colors.gray500};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

  max-height: 3rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;

  color: ${(props) => titleColor[props.theme]};
  font-size: ${fontSize.p};
  font-weight: ${fontWeight.bold};
`;

const Footer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const User = styled.div`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.sm};
  color: ${(props) => titleColor[props.theme]};
`;

const UserDetail = styled.div`
  color: ${colors.gray500};
  font-size: ${fontSize.sm};
`;
