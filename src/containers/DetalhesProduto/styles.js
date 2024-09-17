import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export const Infos = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BotaoCarrinho = styled.div`
    padding: 8px;
    padding-inline: 16px;
    background-color: #fa2e59;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    button {
        background-color: transparent;
        border: none;
        flex-wrap: wrap;
        color: white;
        font-weight: 700;
        cursor: pointer;
    }
`