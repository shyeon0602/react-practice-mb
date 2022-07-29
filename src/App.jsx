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
    const [darkMode, setDarkMode] = useState(true);
    const loading = false;
    const isPost = true;

    return ( 
        <>
        <GlobalStyles />
        <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
            <MediaDiv>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Main>
                    <Slogun />
                    <ShowPostList />
                </Main>
                <Footer />
            </MediaDiv>
        </ThemeProvider>
        </>
    );
}

export default App;