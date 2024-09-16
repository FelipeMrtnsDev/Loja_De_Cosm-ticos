import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrecoTotalCard = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 500px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PrecoLiquido = styled.div`
    border-bottom: 1px solid black;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Desconto = styled.div`
    border-bottom: 1px solid black;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Comprar = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`

export const BotaoComprar = styled.button`
    padding: 12px;
    padding-inline: 64px;
    margin-block: 16px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 16px;
    font-weight: 700;
    font-size: 24px;
`