import React, { useState } from "react";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { updateModalState } from "@/recoil/modal";
import { CommunityDetailSelector, deleteCommunity } from "@/queries";

import { CommunityDetailComment } from "@/containers";
import { Button, FeedDetail } from "@/components";
import { Icon } from "@/foundations";
import { colors, fontSize } from "@/_shared";

const CommunityDetail = ({ ...props }) => {
  const { contentData } = CommunityDetailSelector(feedData);
  const [isLike, setIsLiked] = useState(contentData.likeStatus);
  const setUpdateModalOpen = useSetRecoilState(updateModalState);

  const dropdownItems = [
    {
      name: "edit",
      title: "수정",
      onClick: () => setUpdateModalOpen(16), // TODO: detailId
    },
    {
      name: "delete",
      title: "삭제",
      onClick: () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          deleteCommunity(16);
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

const feedData = {
  boardId: 8,
  boardType: 2,
  writerInfo: {
    nickname: "익명",
    profileImg: null,
    ordinal: null,
    campus: null,
    authCheck: 0,
  },
  title: "this is test",
  content: `
    <p>
      <img
        src="https://file.mk.co.kr/meet/neds/2015/09/image_readtop_2015_891935_14423221542127136.jpg"
        alt="img"
      />
    </p>
    <h1>안녕하세요~~</h1>
    <p>오늘도 어김없이 여러분에게 꿀팁과 알뜰정보를 알려주러 왔어요!!</p>
    <p>
      <br />
    </p>
    <p>
      <img
        src="http://123emoji.com/wp-content/uploads/2017/08/sticker-8-45.png"
        alt="img"
      />
    </p>
    <p>
      <br />
    </p>
    <p>요즘은 바람도 쌀쌀하게 불고~~</p>
    <p>횐님들 모두 감기 조심하세요~~^^</p>
    <p>
      <br />
    </p>
    <p>
      <img
        src="http://123emoji.com/wp-content/uploads/2017/08/sticker-2-45.png"
        alt="img"
      />
    </p>
    <p>그럼 다음에 만나요!</p>
`,
  views: 3,
  comments: [
    {
      commentId: 3,
      content: "으헤헤ㅔ",
      userInfo: {
        nickname: "익명",
        profileImg: null,
        ordinal: null,
        campus: null,
        authCheck: 0,
      },
      createdDate: "2022-02-03T21:54:37",
      modifiedDate: "2022-02-03T21:54:37",
    },
  ],
  totalLike: 1,
  likeStatus: true,
  createdDate: "2022-01-27T21:34:05",
  modifiedDate: "2022-02-03T21:55:28.942",
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
