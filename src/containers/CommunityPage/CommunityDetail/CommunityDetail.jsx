import React, { useState } from "react";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { updateModalState } from "@/recoil/modal";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  CommunityDetailSelector,
  GetCommunityDetail,
  deleteCommunity,
} from "@/queries";

import { CommunityDetailComment } from "@/containers";
import { Button, FeedDetail } from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize } from "@/_shared";

const CommunityDetail = ({ ...props }) => {
  const id = useParams().contentId;
  const navigate = useNavigate();

  const { data } = GetCommunityDetail(id);
  const { contentData } = CommunityDetailSelector(data);

  const [isLike, setIsLiked] = useState(contentData.likeStatus);
  const setUpdateModalOpen = useSetRecoilState(updateModalState);

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCommunity, {
    onMutate: () => {
      navigate("/community");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getCommunityList");
    },
  });

  const dropdownItems = [
    {
      name: "edit",
      title: "수정",
      onClick: () => setUpdateModalOpen(id),
    },
    {
      name: "delete",
      title: "삭제",
      onClick: () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          mutation.mutate(id);
        }
      },
    },
  ];

  return (
    <Layout>
      <FeedDetail {...contentData} dropdownItems={dropdownItems} {...props} />
      <Footer>
        <Button
          mode={isLike ? "primary" : "secondary"}
          onClick={() => setIsLiked(!isLike)}
          {...props}
        >
          <Icon icon="thumbsUp" />
          좋아요
        </Button>
        <CountBox>
          <IconBox>
            <Icon icon="thumbsUp" width="18" />
            <CountNums>{contentData.likecount}</CountNums>
          </IconBox>
          <IconBox>
            <Icon icon="messageCircle" width="18" />
            <CountNums>{contentData.commentcount}</CountNums>
          </IconBox>
          <IconBox>
            <Icon icon="eye" width="18" />
            <CountNums>{contentData.viewcount}</CountNums>
          </IconBox>
        </CountBox>
      </Footer>
      <CommentBox {...props}>
        <CommunityDetailComment {...props} />
      </CommentBox>
    </Layout>
  );
};

export default CommunityDetail;

const borderColor = {
  light: colors.gray300,
  dark: colors.gray800,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;

  > button {
    padding: 0 28px;
    white-space: nowrap;
  }

  @media screen and (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

const CountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${colors.gray500};
`;

const CountNums = styled.div`
  font-size: ${fontSize.sm};
`;

const CommentBox = styled.div`
  border-top: 1px solid ${(props) => borderColor[props.theme]};
`;
