import {
    Main,
    MediaDiv,
} from "./styledComponents";
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./styles";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer from './Footer';
import { useState } from "react";

function App() {
    const initialPostList =[
        {id:1, title:'서강학보, 시사 N 대학기자상 취재', replCount:1},
        {id:2, title:'서강학보, 시사 N 대학기자상 취재', replCount:31},
        {id:3, title:'서강학보, 시사 N 대학기자상 취재', replCount:12},
    ];
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false);
    const [postList, setPostList] = useState(initialPostList);

    const addPost =() => {
        setPostList((postList) => [
            ...postList, {id:4, title:'서강학보, 시사 N 대학기자상 취재', replCount:3},
        ]);
    };

    return ( 
        <>
        <GlobalStyles />
        <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
            <MediaDiv>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Main>
                    <Slogun />
                    <ShowPostList loading={loading} isPost={isPost} postList={postList} addPost={addPost} />
                </Main>
                <Footer />
            </MediaDiv>
        </ThemeProvider>
        </>
    );
}

export default App;