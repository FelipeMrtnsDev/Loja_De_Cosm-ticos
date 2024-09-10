import styled from 'styled-components'

export const Card = styled.div`
    width: 250px;
    height: 400px;
    border: 1px solid black;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
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
    border: 1px solid green;
    background-color: lime;
    cursor: pointer;

    &:hover {
        background-color: limegreen;
    }
`