import {
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  EachPostLi,
  PostSection,
  PostTitle,
  PostTitleDiv,
} from "./styledComponents";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "./loading.svg";
import EachPostList from "./EachPostList";
import { useState } from "react";

const initialPostList = [
  { id: 1, title: "서강학보, 시사 N 대학기자상 취재", replCount: 1 },
  { id: 2, title: "서강학보, 시사 N 대학기자상 취재", replCount: 31 },
  { id: 3, title: "서강학보, 시사 N 대학기자상 취재", replCount: 12 },
];

function ShowPostList() {
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "서강학보, 시사 N 대학기자상 취재", replCount: 3 },
    ]);
  };

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <FontAwesomeIcon icon={faPenToSquare} />
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon}></LoadingImg>
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPostLi
                  key={element.id}
                  title={element.title}
                  // replCount={element.replCount}
                  poastID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>1</PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
