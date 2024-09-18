import { useParams } from "react-router-dom";
import { produtos } from "../../models/produtos";
import { adicionarProdutos } from '../../store/reducers/carrinho/slice';
import { useDispatch } from 'react-redux';
import CarrosselDetalhes from "../../components/CarroselDetalhes";
import { BotaoCarrinho, InfoContainer, Infos, MainContainer } from "./styles";

function DetalhesProduto() {
    const { id } = useParams();
    const produtoFind = produtos.find((produto) => produto.id === parseInt(id, 10));
    const dispatch = useDispatch();

    const handleProdutoClick = () => {
        dispatch(adicionarProdutos(produtoFind));
    };

    if (!produtoFind) {
        return <p>Produto não encontrado</p>;
    }

    console.log(produtoFind)

    return (
        <MainContainer>
            <CarrosselDetalhes imagens={produtoFind.imagensCarrosel} />
            <InfoContainer>
                <Infos>
                    <h1>{produtoFind.titulo}</h1>
                    <p>{produtoFind.descricao}</p>
                </Infos>
                <BotaoCarrinho>
                    <button onClick={handleProdutoClick}>Adicionar ao carrinho</button>
                </BotaoCarrinho>
            </InfoContainer>
        </MainContainer>
    );
}

export default DetalhesProduto;
