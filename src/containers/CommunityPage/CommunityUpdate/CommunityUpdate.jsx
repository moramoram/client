import React, { useRef, useCallback } from "react";

import { useRecoilState } from "recoil";
import { updateModalState } from "@/recoil/modal";
import { useMutation, useQueryClient } from "react-query";
import { GetCommunityDetail, putCommunity } from "@/api";

import { useForm } from "react-hook-form";

import {
  Overlay,
  ModalBox,
  IconBox,
  Layout,
  ButtonBox,
  ContentBox,
} from "./CommunityUpdate.styled";
import { CommunityEditor } from "@/containers/CommunityPage";
import { Button } from "@/components";
import { Icon } from "@/foundations";

const CommunityUpdate = ({ ...props }) => {
  const [contentId, setContentId] = useRecoilState(updateModalState);
  const originalData = GetCommunityDetail(contentId).data;
  const modal = useRef();

  const queryClient = useQueryClient();
  const mutation = useMutation(({ id, data }) => putCommunity(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("getCommunityDetail", contentId);
    },
  });

  const onSubmit = useCallback(
    (data) => {
      const putData = {
        title: data.title || originalData.title,
        content: data.content || originalData.content,
      };
      mutation.mutate({ id: contentId, data: putData });
      setContentId(null);
    },
    [contentId, mutation, originalData, setContentId]
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = useCallback(() => {
    if (window.confirm("지금 나가시면 저장되지 않아요!")) {
      setContentId(null);
    }
  }, [setContentId]);

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
                originalData={originalData}
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

export default CommunityUpdate;
