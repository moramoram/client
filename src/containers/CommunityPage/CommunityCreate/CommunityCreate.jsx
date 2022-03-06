import React, { useRef, useCallback } from "react";

import { useSetRecoilState } from "recoil";
import { createModalState } from "@/recoil/modal";
import { useMutation, useQueryClient } from "react-query";
import { postCommunity } from "@/api";

import { useForm } from "react-hook-form";

import {
  Overlay,
  ModalBox,
  IconBox,
  Layout,
  ButtonBox,
  ContentBox,
} from "./CommunityCreate.styled";
import { CommunityEditor } from "@/containers/";
import { Button } from "@/components";
import { Icon } from "@/foundations";

const CommunityCreate = ({ ...props }) => {
  const setIsCreateOpened = useSetRecoilState(createModalState);
  const modal = useRef();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const mutation = useMutation(postCommunity, {
    onSuccess: () => {
      queryClient.invalidateQueries("getCommunityList");
    },
  });

  const onSubmit = useCallback(
    (data) => {
      data.boardType = data.boardType.value;
      mutation.mutate(data);
      setIsCreateOpened(false);
    },
    [mutation, setIsCreateOpened]
  );

  const handleClose = useCallback(() => {
    if (window.confirm("지금 나가시면 저장되지 않아요!")) {
      setIsCreateOpened(false);
    }
  }, [setIsCreateOpened]);

  return (
    <>
      <Overlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBox>
          <IconBox>
            <Icon icon="x" onClick={() => handleClose()} />
          </IconBox>
          <Layout ref={modal} {...props}>
            <ContentBox>
              <CommunityEditor
                register={register}
                control={control}
                errors={errors}
                {...props}
              />
            </ContentBox>
          </Layout>
        </ModalBox>
        <ButtonBox {...props}>
          <Button mode="secondary" onClick={() => handleClose()} {...props}>
            취소
          </Button>
          <Button
            mode="primary"
            onClick={() => handleSubmit(onSubmit)}
            {...props}
          >
            완료
          </Button>
        </ButtonBox>
      </form>
    </>
  );
};

export default CommunityCreate;
