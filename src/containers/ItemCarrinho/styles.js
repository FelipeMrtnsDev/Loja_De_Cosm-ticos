import styled from "styled-components";


export const Card = styled.div`
    display: flex;
    flex-direction: row;
`

export const ImageInfosContainer = styled.div`
    display: flex;
`

export const Cancelar = styled.button`
    display: flex;
    height: 28px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        font-size: 28px;
    }
`

export const ProdutoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const Image = styled.div`
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 15px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    h3 {
        margin-bottom: 8px;
    }

    p {
        margin-bottom: 44px;
    }
`

export const PrecoTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Quantidade = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    align-items: baseline;

    svg {
        text-align: center;
        font-size: 16px;
        cursor: pointer;
    }

    .mais {
        margin-left: 16px;
    }

    .menos {
        margin-right: 16px;
    }
`