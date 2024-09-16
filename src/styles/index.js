import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        @import "~slick-carousel/slick/slick.css";
        @import "~slick-carousel/slick/slick-theme.css";
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`