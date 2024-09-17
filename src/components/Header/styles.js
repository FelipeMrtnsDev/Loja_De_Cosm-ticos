import styled from "styled-components";

export const NavBar = styled.nav`
    background-color: #fa2e59;
    height: 90px;
    width: 100%;
    display: flex ;


    a {
        text-decoration: none;
        color: white;
    }
    `

export const Itens = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    svg {
        cursor: pointer;
    }
`