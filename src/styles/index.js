import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`