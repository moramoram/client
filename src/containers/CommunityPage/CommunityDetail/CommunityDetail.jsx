import React, { useState } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { auth, updateModalState } from "@/recoil";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  CommunityDetailSelector,
  GetCommunityDetail,
  GetComments,
  putCommunityLike,
  deleteCommunity,
} from "@/api";

import {
  Layout,
  Footer,
  CountBox,
  IconBox,
  CountNums,
  CommentBox,
} from "./CommunityDetail.styled";
import { CommunityDetailComment } from "@/containers/CommunityPage";
import { Button, FeedDetail } from "@/components";
import { Icon } from "@/foundations";

const CommunityDetail = ({ ...props }) => {
  const id = useParams().contentId;
  const navigate = useNavigate();

  const { data } = GetCommunityDetail(id);
  const { contentData } = CommunityDetailSelector(data);
  const [isLike, setIsLiked] = useState(contentData.likeStatus);
  const [likeCount, setLikeCount] = useState(contentData.likecount);
  const user = useRecoilValue(auth);

  const commentData = GetComments({
    type: "board",
    boardType: contentData.boardType,
    id: id,
  });
  const setUpdateModalOpen = useSetRecoilState(updateModalState);

  const queryClient = useQueryClient();

  const putLikeMutation = useMutation(putCommunityLike);

  const deletePostMutation = useMutation(deleteCommunity, {
    onMutate: async (id) => {
      queryClient.removeQueries("getCommunityDetail", id);
      navigate("/community");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getCommunityList");
    },
  });

  const onLike = () => {
    isLike ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    setIsLiked(!isLike);
    putLikeMutation.mutate(id);
  };

  const dropdownItems = [
    {
      label: "수정",
      value: "edit",
      onClick: () => setUpdateModalOpen(id),
    },
    {
      label: "삭제",
      value: "delete",
      onClick: () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          deletePostMutation.mutate(id);
        }
      },
    },
  ];

  return (
    <Layout>
      <FeedDetail
        boardType={contentData.boardType}
        {...contentData}
        dropdownItems={dropdownItems}
        isDisabled={contentData.userId !== user.userId}
        {...props}
      />
      <Footer>
        <Button
          mode={isLike ? "primary" : "secondary"}
          onClick={onLike}
          {...props}
        >
          <Icon icon="thumbsUp" />
          좋아요
        </Button>
        <CountBox>
          <IconBox>
            <Icon icon="thumbsUp" width="18" />
            <CountNums>{likeCount}</CountNums>
          </IconBox>
          <IconBox>
            <Icon icon="messageCircle" width="18" />
            <CountNums>{commentData.data.length}</CountNums>
          </IconBox>
          <IconBox>
            <Icon icon="eye" width="18" />
            <CountNums>{contentData.viewcount}</CountNums>
          </IconBox>
        </CountBox>
      </Footer>
      <CommentBox {...props}>
        <CommunityDetailComment boardType={contentData.boardType} {...props} />
      </CommentBox>
    </Layout>
  );
};

export default CommunityDetail;
