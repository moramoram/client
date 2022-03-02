import React from "react";
import styled from "styled-components";
import Typography from "./";

export default {
  title: "Foundations/Typography",
  component: Typography,
};

export const Default = (args) => <Typography {...args} />;

Default.args = {
  children: "Typography",
};

export const AllTypes = () => (
  <Layout>
    <Row>
      <Info>
        <Typography type="h1">H1</Typography>
      </Info>
      <Typography type="h1">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
    <Row>
      <Info>
        <Typography type="h2">H2</Typography>
      </Info>
      <Typography type="h2">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
    <Row>
      <Info>
        <Typography type="h3">H3</Typography>
      </Info>
      <Typography type="h3">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
    <Row>
      <Info>
        <Typography type="h4">H4</Typography>
      </Info>
      <Typography type="h4">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
    <Row>
      <Info>
        <Typography type="large">Large</Typography>
      </Info>
      <Typography type="large">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
    <Row>
      <Info>
        <Typography type="paragraph">Paragraph</Typography>
      </Info>
      <Typography type="paragraph">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
    <Row>
      <Info>
        <Typography type="small">Small</Typography>
      </Info>
      <Typography type="small">당신이 찾던 싸피만의 커뮤니티</Typography>
    </Row>
  </Layout>
);

AllTypes.args = {
  icon: "smile",
  inline: true,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  width: 100px;
`;
