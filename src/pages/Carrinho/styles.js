import styled from "styled-components";
import background from '../../images/backgrounds.png'

export const CarrinhoContainer = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: repeat;
    height: 87vh;
`

export const MainCarrinhoContainer = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 32px;
`