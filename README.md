<div align="center">

![image](https://user-images.githubusercontent.com/87457066/148544212-28d824f9-a31d-4b6e-b950-1716654d0030.png)

# ssafé

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmoramoram%2Fclient%2F&count_bg=%234A83EF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

 
</div>

1. [**소개**](#소개)
2. [**개발 기간**](#개발-기간)
3. [**기술 스택**](#기술-스택)
4. [**주요 기능**](#주요-기능)
5. [**프로젝트 구성도**](#프로젝트-구성도)
6. [**개발 팀 소개**](#개발-팀-소개)
7. [**기록**](#기록)
8. [**실행 방법**](#실행-방법)

<br />

## 소개

> 당신이 찾던 싸피만의 커뮤니티, ssafé
> </br>

![image](https://user-images.githubusercontent.com/87457066/154912522-8c883ba7-ece3-4db7-8fea-1c2af77d6476.png)

- 싸피인들이 카페에서 처럼 편안하게 이야기를 나누는 공간이 되기를 바라며 만들었어요. ☕
- 취업 정보, 스터디 모집 플랫폼, 커뮤니티 기능을 모두 담았어요.
- PC, Mobile 어디에서나 이용할 수 있어요. 다크모드를 지원해요.

<br />

### ✨ [SSAFE 바로가기 ](http://i6a604.p.ssafy.io) ✨

- [디자인 시스템](http://ssafe-design-system.netlify.app/)
- [서비스 소개 영상](https://www.youtube.com/watch?v=pDnROgpKGXM)

<br />

## 개발 기간

### 2022.01.03 ~ 2022.02.17 (7주)

<br />

## 기술 스택

### 💻 Front-end

<p align="left">
<img src="https://img.shields.io/badge/react-2D333B?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/Recoil-2D333B?style=for-the-badge&logo=react&logoColor=3578E5">
<img src="https://img.shields.io/badge/React Query-2D333B?style=for-the-badge&logo=react query&logoColor=FF4154">
<img src="https://img.shields.io/badge/Story book-2D333B?style=for-the-badge&logo=storybook&logoColor=FF4785">

</p>

- React 로 사용자와의 상호작용이 많은 웹 페이지를 효율적으로 구현하고 관리했어요.
- React Query, Recoil로 UI 상태와 서버 상태를 분리하고 API 응답 데이터를 캐싱함으로써 서버 통신 비용을 줄였어요.
- Story book 기반의 컴포넌트 주도 개발로 UI와 비즈니스 로직을 분리해 재사용성을 높였어요.

<br />

### 💻 Back-end

<p align="left">
<img src="https://img.shields.io/badge/JAVA-2D333B?style=for-the-badge&logo=java&logoColor=007396">
<img src="https://img.shields.io/badge/Spring Boot-2D333B?style=for-the-badge&logo=Spring Boot&logoColor=6DB33F">
<img src="https://img.shields.io/badge/Hibernate-2D333B?style=for-the-badge&logo=Hibernate&logoColor=59666C">
<img src="https://img.shields.io/badge/QueryDSL-2D333B?style=for-the-badge&logo=QueryDSL&logoColor=CA4245">
</p>

- Springboot 로 웹 어플리케이션 서버를 구축했어요.
- Spring Data JPA(Hibernate) 로 객체 지향 데이터 로직을 작성했어요.
- QueryDSL 로 컴파일 시점에 SQL 오류를 감지해요. 더 가독성 높은 코드를 작성했어요.

<br />

### 💎 DB

<p align="left">
<img src="https://img.shields.io/badge/MySQL-2D333B?style=for-the-badge&logo=MySQL&logoColor=4479A1">
</p>

- 데이터 베이스는 MySQL을 사용했어요.

<br />

<!-- ## ⭐ Infra Structure

<p align="center">
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">   <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
</p>

- AWS EC2 와 Docker 를 사용해 서버를 구축했어요.
- AWS S3 이미지 스토리지 서버를 사용하고 있어요.
 -->

<br />

### 🌐 Network

<p align="left">
<img src="https://img.shields.io/badge/NGINX-2D333B?style=for-the-badge&logo=NGINX&logoColor=009639">
</p>

- Nginx 를 웹서버로 사용하고 있어요.

<br />

### 💻 Testing

<p align="left">
<img src="https://img.shields.io/badge/apache jmeter-2D333B?style=for-the-badge&logo=apache-jmeter&logoColor=D22128">
</p>

- JMeter 를 통해 성능 테스트를 진행했어요.

<br />

## 주요 기능

<br />

- #### 오직 싸피인들만 사용할 수 있는 신뢰 있는 사이트🤓

|           유저 인증 페이지           |
| :----------------------------------: |
| ![](https://github.com/moramoram/ssafe-service/blob/main/assets/01-auth.gif) |

<br />

- #### 눈을 사로잡는 랜딩 페이지 ✨

| 랜딩 페이지 |
| :---------: |
|![](https://github.com/moramoram/ssafe-service/blob/main/assets/02-landing.gif) |

<br />

- #### 로그인 후, 사이트의 주요 게시물들을 한 눈에 볼 수 있는 메인 페이지 🌟

|             메인 페이지              |
| :----------------------------------: |
| ![](https://github.com/moramoram/ssafe-service/blob/main/assets/03-main.gif) |

<br />

- #### 한 눈에 볼 수 있는 채용 공고들 🖊

|           채용 공고 페이지           |
| :----------------------------------: |
| ![](https://github.com/moramoram/ssafe-service/blob/main/assets/04-job.gif) |

<br />

- #### 자유롭게 개설, 참여할 수 있는 스터디 📖
  |            스터디 페이지             |
  | :----------------------------------: |
  | ![](https://github.com/moramoram/ssafe-service/blob/main/assets/05-study.gif) |

<br />

- #### 싸피생들 간의 연결고리, 커뮤니티 🗣

|           커뮤니티 페이지            |
| :----------------------------------: |
| ![](https://github.com/moramoram/ssafe-service/blob/main/assets/06-community.gif) |

<br />

- #### 섬세한 반응형 구현 🎆

|           커뮤니티 페이지            |            스터디 페이지             |             채용 페이지              |
| :----------------------------------: | :----------------------------------: | :----------------------------------: |
| ![](https://github.com/moramoram/ssafe-service/blob/main/assets/07-01-community.gif) | ![](https://github.com/moramoram/ssafe-service/blob/main/assets/07-02-study.gif) | ![](https://github.com/moramoram/ssafe-service/blob/main/assets/07-03-job.gif) |

<br />

- #### 다크모드 지원 🌙

|           커뮤니티 페이지            |            스터디 페이지             |
| :----------------------------------: | :----------------------------------: |
| ![](https://github.com/moramoram/ssafe-service/blob/main/assets/08-01-community.gif) | ![](https://github.com/moramoram/ssafe-service/blob/main/assets/08-02-study.gif) |


<br />

- #### Footer에서 ssafe에 대한 추가 정보들을 살펴볼 수 있어요.
  |           커뮤니티 페이지            |
  | :----------------------------------: |
  | ![](https://github.com/moramoram/ssafe-service/blob/main/assets/09-footer.gif) |

<br />

- #### 콘솔에 깜짝 메세지를 숨겨 뒀어요 :D

<br />

## 프로젝트 구성도

|        아키텍처(Architecture)        |
| :----------------------------------: |
| ![](https://i.imgur.com/TIluJNJ.png) |

<br />

## 개발 팀 소개

<table>
  <tr height="205px">
    <td align="center" width="200px">
      <a href="https://github.com/jhj0602/"><img src="public/images/Hyoungjun.svg"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/wangsuuu/"><img src="public/images/Suruen.svg"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/devpla"><img src="public/images/Yeonhee.svg"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/SonSangjoon/"><img src="public/images/Sangjoon.svg"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/Yewonn/"><img src="public/images/Yewon.svg"/></a>
    </td>
  </tr>
  <tr>
    <td align="center" width="200px">
      <a href="https://github.com/jhj0602/"><strong>진형준</strong></a><br>Backend | Leader
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/wangsuuu/"><strong>왕수련</strong></a><br>Backend
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/devpla/"><strong>채연희</strong></a><br>Frontend | Design
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/SonSangjoon/"><strong>손상준</strong></a><br>Frontend
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/Yewonn/"><strong>이예원</strong></a><br>Frontend
    </td>
  </tr>
</table>

<br />

## 기록

### moramoram의 기록들

- [Notion](https://endurable-wanderer-fa3.notion.site/moramoram-09fa48957b0c4d4f885f04af6365e664)
- [Figma](<https://www.figma.com/file/KKHRfTcEuNC1vChK7ExJLU/ssafe-(public)?node-id=0%3A1>)

<br />

### 버전기록

| 버전   | 업데이트 내용                                                                                                                              | 업데이트 날짜 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| v1.0.0 | - SSAFE 서비스 오픈                                                                                                                        | 22.02.12      |
| v1.0.1 | - AWS S3 Image Server CORS 수정<br/> - 댓글 작성자 Response 통일                                                                           | 22.02.12      |
| v1.0.2 | - 게시판 새로고침 시 목록으로 이동하는 오류 수정<br/> -유저 닉네임 중복확인 및 프로필 사진 오류 수정 <br/>                                 | 22.02.12      |
| v1.1.0 | - 관리자 페이지 추가 <br/> - 랜딩 페이지 수정 <br/>                                                                                        | 22.02.12      |
| v1.2.0 | - 알림 기능 추가 <br/> - Admin 알림 API 추가<br/>                                                                                          | 22.02.12      |
| v1.3.0 | - footer 내용 생성(만든 사람, 이용 약관, 개인정보처리방침 등) 및 링크 연결<br/>                                                            | 22.02.14      |
| v1.3.1 | - 첫 접속 시 랜딩 페이지 type error 수정 <br/> - 채용 상세보기 시 관련 스터디가 로딩되지 않는 오류 수정<br/>                               | 22.02.14      |
| v1.3.2 | - 디테일 페이지에서 Refresh시 Home redirect 현상 수정 <br/> - main 페이지 carousel banner 연결 <br/> - 취업 정보 페이지 마감임박 버튼 수정 | 22.02.16      |

<br />

## 실행 방법

### client 실행

1. **원격 저장소 복제**

```bash
$ git clone https://lab.ssafy.com/s06-webmobile2-sub2/S06P12A604.git
```

2. **프로젝트 폴더로 이동**

```bash
$ cd client
```

3. **필요한 node_modules 설치**

```bash
$ yarn install
```

4. **개발 서버 실행**

```bash
$ yarn start
```

<br />

### server 실행

1. **원격 저장소 복제**

```bash
$ git clone https://lab.ssafy.com/s06-webmobile2-sub2/S06P12A604.git
```

2. **프로젝트 폴더로 이동**

```bash
$ cd server
```

3. **main 메서드 실행하기**
