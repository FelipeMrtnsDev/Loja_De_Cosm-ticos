import styled from "styled-components";
import background from '../../images/backgrounds.png'

export const CarrinhoContainer = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    background-image: url(${background});
    background-size: cover;
    background-repeat: repeat;
`