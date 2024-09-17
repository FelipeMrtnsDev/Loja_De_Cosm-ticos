import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import SylviaAngel from '../font/Sylvia_Angel.otf'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        @import "~slick-carousel/slick/slick.css";
        @import "~slick-carousel/slick/slick-theme.css";
    }

    @font-face {
        font-family: 'Sylvia Angel';
        src: url(${SylviaAngel});
    }


`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`