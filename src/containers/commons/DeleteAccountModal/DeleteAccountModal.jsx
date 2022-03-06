import React, { useEffect, useRef, useCallback, useState } from "react";

import { Icon } from "@/foundations";
import { Button, Checkbox } from "@/components";
import { DeleteAccountCompleteModal } from "@/containers";
import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  DescriptionBorder,
  Description,
  ButtonBox,
} from "./DeleteAccountModal.styled";

const DeleteAccountModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [showDeleteAccountCompleteModal, setShowDeleteAccountCompleteModal] =
    useState(false);

  const openModal = () => {
    setShowDeleteAccountCompleteModal((prev) => !prev);
  };

  const handleClose = useCallback(() => {
    setShowModal(null);
  }, [setShowModal]);
  const [checked, setChecked] = useState("");

  const checkedChange = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !showDeleteAccountCompleteModal &&
        showModal &&
        !modalRef?.current.contains(event.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showModal, handleClose, showDeleteAccountCompleteModal]);

  return (
    <>
      {showModal ? (
        <div>
          <Overlay />
          <ModalBox>
            <Layout ref={modalRef}>
              <CloseIconBox>
                <Icon icon="x" onClick={() => setShowModal((prev) => !prev)} />
              </CloseIconBox>
              <ContentBox>
                <Title type="h2" style={{ gap: "4rem" }}>
                  탈퇴 전 확인하세요
                </Title>
                <Title type="h4">
                  {`탈퇴하면 이용 중인 계정이 삭제되고, \n 모든 데이터는 복구가 불가능해요 \n 신중하게 결정해주세요!`}
                </Title>
                <DescriptionBorder>
                  <Description type="paragraph">
                    {`- 작성했던 게시글, 프로필 등 모든 정보가 삭제됩니다. \n - 다른 사람의 글에 작성한 댓글은 삭제되지 않으니 미리 확인하세요.`}
                  </Description>
                </DescriptionBorder>
                <Checkbox
                  label="안내 사항을 모두 확인했으며, 탈퇴하겠습니다."
                  onChange={checkedChange}
                ></Checkbox>
                <ButtonBox>
                  <Button mode="primary" width="200" onClick={handleClose}>
                    뒤로 돌아갈래요
                  </Button>
                  <Button
                    mode="primary"
                    width="200"
                    onClick={openModal}
                    style={{ backgroundColor: "gray" }}
                    disabled={!checked}
                  >
                    탈퇴할래요
                  </Button>
                  <DeleteAccountCompleteModal
                    showModal={showDeleteAccountCompleteModal}
                    setShowModal={setShowDeleteAccountCompleteModal}
                  />
                </ButtonBox>
              </ContentBox>
            </Layout>
          </ModalBox>
        </div>
      ) : null}
    </>
  );
};

export default DeleteAccountModal;
