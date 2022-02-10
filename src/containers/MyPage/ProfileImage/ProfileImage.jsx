import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useMutation, useQueryClient } from "react-query";
import { PutProfileImage, DeleteProfileImage } from "@/queries";

import Cropper from "react-easy-crop";

import { Avatar, Button, InputImage } from "@/components";
import { getCroppedImg } from "@/utils";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const ProfileImage = ({ profileImg, aspect, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [preview, setPrevew] = useState(profileImg);

  const queryClient = useQueryClient();
  const putProfileImage = useMutation(PutProfileImage, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("getUserProfile");
      setPrevew(data.profileImg);
    },
  });
  const deleteProfileImage = useMutation(DeleteProfileImage, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUserProfile");
      setPrevew(null);
    },
  });

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      if (file && file.type.match("image.*")) {
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
      }
    });
  };

  const onFileChange = async (files) => {
    if (files) {
      const file = files[0];
      if (file?.size > 10485760) {
        alert("10MB 이하로 업로드해주세요");
      } else {
        let imageDataUrl = await readFile(file);
        setImageSrc(imageDataUrl);
      }
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const changeProfileImage = useCallback(async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    const file = await fetch(croppedImage).then((r) => r.blob());
    const formData = new FormData();
    formData.append("profileImg", file, `image.png`);
    putProfileImage.mutate(formData);
  }, [imageSrc, croppedAreaPixels, putProfileImage]);

  const initProfileImage = useCallback(() => {
    deleteProfileImage.mutate();
  }, [deleteProfileImage]);

  const onClose = useCallback(() => {
    setImageSrc(null);
  }, []);

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
          <ButtonBox>
            <Button mode="secondary" onClick={onClose}>
              취소
            </Button>
            <Button
              onClick={() => {
                changeProfileImage();
                onClose();
              }}
            >
              등록
            </Button>
          </ButtonBox>
        </CropperBox>
      )}
      <Layout>
        <ImgBox>
          <Avatar size="extraLarge" src={preview} alt="Cropped" />
          <Button mode="secondary" onClick={initProfileImage} {...props}>
            초기화
          </Button>
        </ImgBox>
        <InputImage onChange={onFileChange} accept="image/*" {...props} />
      </Layout>
    </>
  );
};

ProfileImage.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  aspect: PropTypes.node,
};

ProfileImage.defaultProps = {
  theme: THEME.LIGHT,
  aspect: 1,
};

export default ProfileImage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
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

const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  left: calc(50% - 115px);
  bottom: 10%;
  margin: auto;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 8px;
  }
`;
