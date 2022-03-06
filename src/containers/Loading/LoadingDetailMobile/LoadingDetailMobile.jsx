import React from "react";
import PropTypes from "prop-types";

import {
  Layout,
  TitleBox,
  Highlight,
  Title,
  SubTitle,
  SideBarBox,
  BadgeBox,
  Content,
  CommentBox,
  BoxTitle,
  BoxDescription,
  FixedBox,
  ButtonBg,
  ButtonBox,
} from "./LoadingDetailMobile.styled";
import {
  Badge,
  Button,
  CommentInput,
  CommentList,
  ImageBoxResponsive,
  SideBarItem,
  Toc,
} from "@/components";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const LoadingDetailMobile = ({ ...props }) => {
  return (
    <>
      <Layout>
        <ImageBoxResponsive className="thumbnail" isLoading {...props} />
        <TitleBox isLoading {...props}>
          <Highlight isLoading {...props}></Highlight>
          <Title isLoading {...props}></Title>
          <SubTitle isLoading {...props} />
          <SideBarBox>
            {summaryData.map(({ title, icon, description }, idx) => (
              <SideBarItem
                className="contents-item"
                key={idx}
                isLoading
                title={title}
                icon={icon}
                description={description}
                {...props}
              />
            ))}
          </SideBarBox>
          <BadgeBox>
            {badges.map((children, idx) => {
              return (
                <Badge
                  className="badge-item"
                  key={idx}
                  mode="secondary"
                  color="gray100"
                  isBold
                  isLoading
                  {...props}
                >
                  {children}
                </Badge>
              );
            })}
          </BadgeBox>
        </TitleBox>
        <Toc items={tocItem} {...props} />
        <Content {...props}></Content>
        <CommentBox>
          <BoxTitle {...props}>댓글</BoxTitle>
          <BoxDescription {...props}></BoxDescription>
          <CommentInput {...props} />
          <CommentList isLoading {...props} />
        </CommentBox>
      </Layout>
      <FixedBox>
        <ButtonBg {...props} />
        <ButtonBox {...props}>
          <Button minWidth="380px" isLoading {...props} />
        </ButtonBox>
      </FixedBox>
    </>
  );
};

LoadingDetailMobile.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  data: PropTypes.object,
};

LoadingDetailMobile.defaultProps = {
  theme: THEME.LIGHT,
};

export default LoadingDetailMobile;

const tocItem = new Array(2).fill({
  name: "",
  title: "",
  number: null,
});

const summaryData = new Array(4).fill({});
const badges = new Array(3).fill("");
