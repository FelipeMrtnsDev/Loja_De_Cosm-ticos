import { useDispatch } from 'react-redux'
import { Card, Descricao, Image, Titulo, BotaoAdicionar } from './styles'
import { adicionarProdutos } from '../../store/reducers/carrinho/slice'

const Produto = ({ titulo, preco, descricao, image, alt, id}) => {

    const dispatch = useDispatch()

    const handleProdutoClick = () => {
        const Produto = {
            id,
            titulo,
            preco,
            descricao,
            image,
            alt
        }
        dispatch(adicionarProdutos(Produto))

        console.log(Produto)
    }

    return(
        <Card key={id}>
            <Image>
                <img src={image} alt={alt} />
            </Image>
            <hr />
            <Titulo>
                <h2>{titulo}</h2>
                <Descricao>
                    <p>{descricao}</p>
                </Descricao>
                <p>R${preco}</p>
                <BotaoAdicionar onClick={handleProdutoClick}>Adicionar</BotaoAdicionar>
            </Titulo>
        </Card>
    )
}

export default Produto

//imagem, alt, titulo, descricao, preco