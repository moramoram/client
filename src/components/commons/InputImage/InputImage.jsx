import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Dropzone from "react-dropzone";

import { Icon } from "@/foundations";
import { colors, fontSize, fontWeight, shadows } from "@/_shared";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const InputImage = (props) => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        props.onChange(acceptedFiles);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <Layout {...getRootProps()} {...props}>
          <input {...getInputProps()} accept="image/*" />
          <Icon icon="image" />
          <Title>이미지를 업로드하세요</Title>
          <Description>
            여기를 클릭하거나 파일을 마우스로 끌어보세요.
          </Description>
        </Layout>
      )}
    </Dropzone>
  );
};

InputImage.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
};

InputImage.defaultProps = {
  theme: THEME.LIGHT,
};

export default InputImage;

const bgColor = {
  light: colors.white,
  dark: colors.gray900,
};

const borderColor = {
  light: colors.gray300,
  dark: colors.gray700,
};

const iconColor = {
  light: colors.gray300,
  dark: colors.gray600,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding: 3rem;
  border-radius: 8px;
  border: 2px dashed ${(props) => borderColor[props.theme]};
  box-shadow: ${shadows.button};

  background-color: ${(props) => bgColor[props.theme]};
  cursor: pointer;

  svg {
    width: 42px;
    height: 42px;
    stroke: ${(props) => iconColor[props.theme]};
  }
`;

const Title = styled.div`
  padding-top: 1rem;
  color: ${colors.blue100};
  font-weight: ${fontWeight.bold};
`;

const Description = styled.div`
  color: ${colors.gray500};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.sm};
`;
