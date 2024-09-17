import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled(Link)`
    width: 250px;
    height: 350px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 5px grey;
    cursor: pointer;
    text-decoration: none;
`

export const Image = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
    border-radius: 15px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const Titulo = styled.div`
    display: flex;
    justify-content: center;
    margin: 8px;
    flex-direction: column;
    align-items: center;
    
    h2 {
        color: black;
    }
`

export const Descricao = styled.div`
    align-items: center;
    overflow: hidden; 
    text-overflow: ellipsis;
    height: 80px;
    width: 100%;
    color: black;
    padding: 12px;
    margin-bottom: 8px;
`

export const BotaoAdicionar = styled.button`
    font-size: 1.3em;
    margin-top: 8px;
    padding: 6px;
    border-radius: 8px;
    border: none;
    background-color: lime;
    cursor: pointer;

    &:hover {
        background-color: limegreen;
    }
`

export const PrecoProduto = styled.div`
    width: 100%;
    display: flex;
    padding-left: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .preco {
        color: #fa2e59;
        font-size: 22px;
        font-weight: 700;
    }

    span {
        color: #fa2e59;
    }

    svg {
        font-size: 22px;
    }

`

export const Avaliacao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;

    .valor-avaliacao {
        color: black;
    }
`