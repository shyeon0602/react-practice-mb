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
    Postlink,
    PostListDiv,
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
                            
                        </PostListDiv>
                    </PostSection>
                </Main>
            </MediaDiv>
        </>
    );
}

export default App;