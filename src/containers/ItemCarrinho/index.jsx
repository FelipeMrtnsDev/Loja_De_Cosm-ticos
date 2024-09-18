import { Card, Image, Infos, PrecoTotal, ProdutoContainer, ImageInfosContainer, Cancelar, Quantidade } from "./styles"
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { incrementarProduto, decrementarProduto, removerProduto } from '../../store/reducers/carrinho/slice';

function ItemCarrinho({ produto }) {

    const dispatch = useDispatch()

    const handleIncrementarClick = () => {
        dispatch(incrementarProduto(produto.id))
    }

    const handleDecrementarClick = () => {
        dispatch(decrementarProduto(produto.id))
    }

    const handleRemoverClick = () => {
        dispatch(removerProduto(produto.id))
    }

    return(
        <Card>
            <ProdutoContainer>
                <ImageInfosContainer>
                    <Image>
                        <img src={produto.imagemUrl} alt={produto.titulo} />
                    </Image>
                    <Infos>
                        <h3>{produto.titulo}</h3>
                        <p>{produto.preco}</p>
                        <Quantidade>
                            <FaMinus onClick={handleDecrementarClick}  className="menos"/>
                            <p>{produto.quantidade}</p>
                            <FaPlus onClick={handleIncrementarClick} className="mais"/>
                        </Quantidade>
                    </Infos>
                </ImageInfosContainer>
                <PrecoTotal>
                    <p>{produto.preco}</p>
                </PrecoTotal>
                <Cancelar>
                    <IoClose onClick={handleRemoverClick} />
                </Cancelar>
            </ProdutoContainer>
        </Card>
    )
}

export default ItemCarrinho