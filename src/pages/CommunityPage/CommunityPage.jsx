import React, { Suspense } from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { themeState } from "@/recoil/theme";
import { createModalState } from "@/recoil/modal";

import { useMediaQuery } from "react-responsive";

import { SubNavbar } from "@/components";
import {
  CommunityIntro,
  CommunityCreateButton,
  CommunityFeedGrid,
  FeedGrid,
} from "@/containers";

const CommunityPage = () => {
  const theme = useRecoilValue(themeState);
  const setLoginModalOpen = useSetRecoilState(createModalState);

  const handleCategory = (e) => {
    console.log(e);
  };

  const isPc = useMediaQuery({
    query: "(min-width:980px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:980px)",
  });

  return (
    <>
      <CommunityIntro
        theme={theme}
        handleButtonClick={() => setLoginModalOpen(true)}
      />
      {isPc && (
        <MainBox>
          <StickyNavBox>
            <StickyNav
              data={categoryData}
              theme={theme}
              onClick={handleCategory}
            />
          </StickyNavBox>
          <ContentBox>
            {/* <NoticeBox>
              <FeedSmallGrid data={feedSmallData} />
            </NoticeBox> */}
            <CommunityCreateButton
              onClick={() => setLoginModalOpen(true)}
              theme={theme}
            />
            <Suspense fallback={<FeedGrid isLoading />}>
              <CommunityFeedGrid theme={theme} />
            </Suspense>
          </ContentBox>
        </MainBox>
      )}
      {isMobile && (
        <MobileBox>
          <SubNavbar
            data={categoryData}
            theme={theme}
            onClick={handleCategory}
            view="mobile"
          />
          {/* <NoticeBox>
            <FeedSmallGrid data={feedSmallData} />
          </NoticeBox> */}
          <CommunityCreateButton
            onClick={() => setLoginModalOpen(true)}
            theme={theme}
          />
          <Suspense fallback={<FeedGrid isLoading />}>
            <CommunityFeedGrid theme={theme} />
          </Suspense>
        </MobileBox>
      )}
    </>
  );
};

export default CommunityPage;

const categoryData = [
  {
    id: 0,
    title: "자유게시판",
  },
  {
    id: 1,
    title: "익명게시판",
  },
  {
    id: 2,
    title: "취업 정보 게시판",
  },
  {
    id: 3,
    title: "질문 게시판",
  },
];

// const feedData = [
//   {
//     username: "아이유",
//     avatar:
//       "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-02-01"),
//     title: "겨울잠",
//     content:
//       "때 이른 봄 몇 송이 꺾어다 너의 방 문 앞에 두었어. 긴 잠 실컷 자고 나오면 그때쯤엔 예쁘게 피어 있겠다. 별 띄운 여름 한 컵 따라다 너의 머리맡에 두었어. 금세 다 녹아버릴 텐데 너는 아직 혼자 쉬고 싶은가 봐. 너 없이 보는 첫 봄이, 여름이 괜히 왜 이렇게 예쁘니 다 가기 전에 널 보여줘야 하는데",
//     thumbnail:
//       "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
//     likecount: numToMillion(124),
//     commentcount: numToMillion(102),
//     viewcount: numToMillion(11328),
//     id: "1",
//   },
//   {
//     username: "이지금",
//     avatar:
//       "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-01-20"),
//     title: "어푸",
//     content:
//       "I’m such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 풍덩 uh 빠지더라도 구명복 따윈 졸업 I’m such a good surfer 휩쓸리지 않기 울렁 우 울렁 거리다가 throw up 게워내더라도 지는 건 난 못 참아 제일 높은 파도 올라타타 라차차우아 해일과 함께 사라질 타이밍 그건 내가 골라 무슨 소리 겁이 나기는, 재밌지 뭐 어어어 푸푸푸 또 허허허 우우우적",
//     thumbnail:
//       "https://c.tenor.com/2wUzXNHcZpQAAAAC/iu-%EC%95%84%EC%9D%B4%EC%9C%A0.gif",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "지은",
//     avatar:
//       "https://post-phinf.pstatic.net/MjAyMTA0MDZfMjA3/MDAxNjE3Njc0NDgzODE3.P69boMDnShLeQghEqWAG_jG5hXf0B1dnWV0ziOsg3BMg.VPd9sIgKN22W4Tiv8fmJ6_TXuoYQCiTlkvaVUKtyEdkg.PNG/%EB%A9%94%EC%9D%B8.png?type=w1200",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2021-01-24"),
//     title: "라일락",
//     content:
//       "오 라일락 꽃이 지는 날 goodbye 이런 결말이 어울려 안녕 꽃잎 같은 안녕 하이얀 우리 봄날의 climax 아 얼마나 기쁜 일이야 Ooh ooh Love me only till this spring 봄바람처럼 Ooh ooh Love me only till this spring 봄바람처럼 기분이 달아 콧노래 부르네 (랄라)",
//     thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "아이유",
//     avatar:
//       "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-02-01"),
//     title: "겨울잠",
//     content:
//       "때 이른 봄 몇 송이 꺾어다 너의 방 문 앞에 두었어. 긴 잠 실컷 자고 나오면 그때쯤엔 예쁘게 피어 있겠다. 별 띄운 여름 한 컵 따라다 너의 머리맡에 두었어. 금세 다 녹아버릴 텐데 너는 아직 혼자 쉬고 싶은가 봐. 너 없이 보는 첫 봄이, 여름이 괜히 왜 이렇게 예쁘니 다 가기 전에 널 보여줘야 하는데",
//     thumbnail:
//       "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
//     likecount: numToMillion(124),
//     commentcount: numToMillion(102),
//     viewcount: numToMillion(11328),
//     id: "1",
//   },
//   {
//     username: "이지금",
//     avatar:
//       "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-01-20"),
//     title: "어푸",
//     content:
//       "I’m such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 풍덩 uh 빠지더라도 구명복 따윈 졸업 I’m such a good surfer 휩쓸리지 않기 울렁 우 울렁 거리다가 throw up 게워내더라도 지는 건 난 못 참아 제일 높은 파도 올라타타 라차차우아 해일과 함께 사라질 타이밍 그건 내가 골라 무슨 소리 겁이 나기는, 재밌지 뭐 어어어 푸푸푸 또 허허허 우우우적",
//     thumbnail: "",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "지은",
//     avatar:
//       "https://post-phinf.pstatic.net/MjAyMTA0MDZfMjA3/MDAxNjE3Njc0NDgzODE3.P69boMDnShLeQghEqWAG_jG5hXf0B1dnWV0ziOsg3BMg.VPd9sIgKN22W4Tiv8fmJ6_TXuoYQCiTlkvaVUKtyEdkg.PNG/%EB%A9%94%EC%9D%B8.png?type=w1200",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2021-01-24"),
//     title: "라일락",
//     content:
//       "오 라일락 꽃이 지는 날 goodbye 이런 결말이 어울려 안녕 꽃잎 같은 안녕 하이얀 우리 봄날의 climax 아 얼마나 기쁜 일이야 Ooh ooh Love me only till this spring 봄바람처럼 Ooh ooh Love me only till this spring 봄바람처럼 기분이 달아 콧노래 부르네 (랄라)",
//     thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "아이유",
//     avatar:
//       "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-02-01"),
//     title: "겨울잠",
//     content:
//       "때 이른 봄 몇 송이 꺾어다 너의 방 문 앞에 두었어. 긴 잠 실컷 자고 나오면 그때쯤엔 예쁘게 피어 있겠다. 별 띄운 여름 한 컵 따라다 너의 머리맡에 두었어. 금세 다 녹아버릴 텐데 너는 아직 혼자 쉬고 싶은가 봐. 너 없이 보는 첫 봄이, 여름이 괜히 왜 이렇게 예쁘니 다 가기 전에 널 보여줘야 하는데",
//     thumbnail:
//       "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
//     likecount: numToMillion(124),
//     commentcount: numToMillion(102),
//     viewcount: numToMillion(11328),
//     id: "1",
//   },
//   {
//     username: "이지금",
//     avatar:
//       "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-01-20"),
//     title: "어푸",
//     content:
//       "I’m such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 풍덩 uh 빠지더라도 구명복 따윈 졸업 I’m such a good surfer 휩쓸리지 않기 울렁 우 울렁 거리다가 throw up 게워내더라도 지는 건 난 못 참아 제일 높은 파도 올라타타 라차차우아 해일과 함께 사라질 타이밍 그건 내가 골라 무슨 소리 겁이 나기는, 재밌지 뭐 어어어 푸푸푸 또 허허허 우우우적",
//     thumbnail: "",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "지은",
//     avatar:
//       "https://post-phinf.pstatic.net/MjAyMTA0MDZfMjA3/MDAxNjE3Njc0NDgzODE3.P69boMDnShLeQghEqWAG_jG5hXf0B1dnWV0ziOsg3BMg.VPd9sIgKN22W4Tiv8fmJ6_TXuoYQCiTlkvaVUKtyEdkg.PNG/%EB%A9%94%EC%9D%B8.png?type=w1200",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2021-01-24"),
//     title: "라일락",
//     content:
//       "오 라일락 꽃이 지는 날 goodbye 이런 결말이 어울려 안녕 꽃잎 같은 안녕 하이얀 우리 봄날의 climax 아 얼마나 기쁜 일이야 Ooh ooh Love me only till this spring 봄바람처럼 Ooh ooh Love me only till this spring 봄바람처럼 기분이 달아 콧노래 부르네 (랄라)",
//     thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "아이유",
//     avatar:
//       "https://image.bada.io/files//crawling/2021/04/05/bobaedream/1612930_i14788674553.jpg",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-02-01"),
//     title: "겨울잠",
//     content:
//       "때 이른 봄 몇 송이 꺾어다 너의 방 문 앞에 두었어. 긴 잠 실컷 자고 나오면 그때쯤엔 예쁘게 피어 있겠다. 별 띄운 여름 한 컵 따라다 너의 머리맡에 두었어. 금세 다 녹아버릴 텐데 너는 아직 혼자 쉬고 싶은가 봐. 너 없이 보는 첫 봄이, 여름이 괜히 왜 이렇게 예쁘니 다 가기 전에 널 보여줘야 하는데",
//     thumbnail:
//       "https://w.namu.la/s/e8a1981b6f848717dc05daeff3db84ad42bf24bcd02671d9e743d22b4d1fd28ebf66def6a7c341e158e961c4b826db435d30d994056f5a4095b789d168f8254bc908459c951c9fc48b94b21f5588baed",
//     likecount: numToMillion(124),
//     commentcount: numToMillion(102),
//     viewcount: numToMillion(11328),
//     id: "1",
//   },
//   {
//     username: "이지금",
//     avatar:
//       "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2022-01-20"),
//     title: "어푸",
//     content:
//       "I’m such a good surfer 가라앉지 않기 비틀 비 비틀 거리다가 풍덩 uh 빠지더라도 구명복 따윈 졸업 I’m such a good surfer 휩쓸리지 않기 울렁 우 울렁 거리다가 throw up 게워내더라도 지는 건 난 못 참아 제일 높은 파도 올라타타 라차차우아 해일과 함께 사라질 타이밍 그건 내가 골라 무슨 소리 겁이 나기는, 재밌지 뭐 어어어 푸푸푸 또 허허허 우우우적",
//     thumbnail: "",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
//   {
//     username: "지은",
//     avatar:
//       "https://post-phinf.pstatic.net/MjAyMTA0MDZfMjA3/MDAxNjE3Njc0NDgzODE3.P69boMDnShLeQghEqWAG_jG5hXf0B1dnWV0ziOsg3BMg.VPd9sIgKN22W4Tiv8fmJ6_TXuoYQCiTlkvaVUKtyEdkg.PNG/%EB%A9%94%EC%9D%B8.png?type=w1200",
//     campus: "서울",
//     ordinal: "6기",
//     created: daysFromToday("2021-01-24"),
//     title: "라일락",
//     content:
//       "오 라일락 꽃이 지는 날 goodbye 이런 결말이 어울려 안녕 꽃잎 같은 안녕 하이얀 우리 봄날의 climax 아 얼마나 기쁜 일이야 Ooh ooh Love me only till this spring 봄바람처럼 Ooh ooh Love me only till this spring 봄바람처럼 기분이 달아 콧노래 부르네 (랄라)",
//     thumbnail: "https://image.bugsm.co.kr/album/images/500/40271/4027185.jpg",
//     likecount: numToMillion(1224),
//     commentcount: numToMillion(2102),
//     viewcount: numToMillion(2124128),
//     id: "1",
//   },
// ];

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  max-width: 1280px;
  margin: auto;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 320px);
  gap: 40px;
  padding: 80px 0 0 0;
`;

const MobileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StickyNavBox = styled.div`
  padding-top: 86px;
`;

const StickyNav = styled(SubNavbar)`
  position: sticky;
  top: 150px;
  align-self: flex-start;
`;

// const NoticeBox = styled.div`
//   overflow-x: scroll;
// `;
