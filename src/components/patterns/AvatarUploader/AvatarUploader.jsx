import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Cropper from "react-easy-crop";

import { Avatar, Button, InputImage } from "@/components";
import { getCroppedImg } from "@/utils";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const AvatarUploader = ({ aspect, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const onClose = useCallback(() => {
    setImageSrc(null);
  }, []);

  const onFileChange = async (files) => {
    if (files?.length > 0) {
      const file = files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  return (
    <>
      {imageSrc && (
        <CropperBox>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect="1"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape="round"
          />
          <SubmitButton
            onClick={() => {
              showCroppedImage();
              onClose();
            }}
          >
            이미지 자르기
          </SubmitButton>
        </CropperBox>
      )}
      <Layout>
        <ImgBox>
          {/* TODO : 프로필 state 있을 경우 아바타 띄워주기 */}
          <Avatar size="extraLarge" src={croppedImage} alt="Cropped" />
        </ImgBox>
        <InputImage onChange={onFileChange} accept="image/*" {...props} />
      </Layout>
    </>
  );
};

AvatarUploader.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  aspect: PropTypes.node,
};

AvatarUploader.defaultProps = {
  theme: THEME.LIGHT,
  aspect: 1,
};

export default AvatarUploader;

const Layout = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`;

const CropperBox = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const SubmitButton = styled(Button)`
  position: absolute;
  left: calc(50% - 90px);
  bottom: 18%;

  width: 180px;
  margin: auto;
`;

const ImgBox = styled.div`
  img {
    border-radius: 8px;
  }
`;
