import styled from 'styled-components';

export const SideBar = styled.aside`
    position: fixed;
    right: 0;
    width: 400px;
    height: 100vh;
    background-color: #fa2e59;
    transition: all ease 1s;
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: start;
    color: white;
    border-left: 4px solid black;
    z-index: 3;

    .close {
        font-size: 50px;
        cursor: pointer;
    }
`;

export const Close = styled.div`
    display: flex;
    justify-content: end;
    padding: 10px;
`;

export const Itens = styled.div`
    margin-left: 24px;
    margin-top: 32px;
    width: 100%;
    height: 100px;
    display: flex;
    cursor: pointer;
    
    p {
        color: white;
        font-size: 30px;
        align-items: center;
    }
    
    svg {
        color: white;
        font-size: 50px;
        margin-right: 30px;
    }
`;
