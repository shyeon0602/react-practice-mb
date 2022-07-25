import {
    EachPostli,
    Footer,
    FooterBig,
    FooterSmall,
    Header,
    LoadingDiv,
    LoadingImg,
    Main,
    MediaDiv,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    EachPostLi,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
    SlogunBig,
    SlogunSection,
    SlogunSmall,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from "./styledComponents";
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import{
    faSun,
    faMoon,
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';

function App() {
    return ( 
        <>
            <MediaDiv>
                <Header>
                    <TitleLogoDiv>
                        <TitleBig>멋사</TitleBig>
                        <TitleSmall>익명게시판</TitleSmall>
                    </TitleLogoDiv>
                    <SubHeaderDiv>다크모드 버튼</SubHeaderDiv>
                </Header>
                <Main>
                    <SlogunSection>
                        <SlogunBig>HACK YOUR LIFE</SlogunBig>
                        <SlogunSmall>
                            내 아이디어를 내 손으로 실현한다.
                        </SlogunSmall>
                    </SlogunSection>
                    <PostSection>
                        <PostTitleDiv>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                            <PostTitle>익명게시판</PostTitle>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </PostTitleDiv>
                        <PostListDiv>
                            <ul>
                                <EachPostLi>
                                    <div>
                                        <FontAwesomeIcon icon={faLocationPin} />
                                        <PostLink>서강학보, 시사 N 대학기자상 취재</PostLink>
                                    </div>
                                    <PostRepl>[35]</PostRepl>
                                </EachPostLi>
                            </ul>
                        </PostListDiv>
                    </PostSection>
                    <PagingSection>
                        <PagenumberDiv>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </PagenumberDiv>
                        <PagenumberDiv>2</PagenumberDiv>
                        <PagenumberDiv>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </PagenumberDiv>
                    </PagingSection>
                </Main>
                <Footer>
                    <FontAwesomeIcon icon={faReact} />
                    <FooterBig>for react study</FooterBig>
                    <FooterSmall>2022. by seohyun</FooterSmall>
                </Footer>
            </MediaDiv>
        </>
    );
}

export default App;