import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    EachPostLi,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
    loading,
} from "./styledComponents";
import{
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import loadingIcon from "./loading.svg";

function ShowPostList({isPost, loading}) {
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon icon={faArrowsRotate} />
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
              <EachPostLi>
                <div>
                  <FontAwesomeIcon icon={faLocationPin} />
                  <PostLink>서강학보, 시사 N 대학기자상 취재</PostLink>
                </div>
                <PostRepl>[35]</PostRepl>
              </EachPostLi>
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
