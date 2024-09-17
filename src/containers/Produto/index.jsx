import { Card, Descricao, Image, Titulo, PrecoProduto, Avaliacao } from './styles'
import { FaStar } from "react-icons/fa";

const Produto = ({ titulo, preco, descricao, image, alt, id}) => {
    return(
        <Card key={id} to={`/produto/${id}`}>
            <Image>
                <img src={image} alt={alt} />
            </Image>
            <Titulo>
                <h2>{titulo}</h2>
                <Descricao>
                    <p>{descricao}</p>
                </Descricao>
                <PrecoProduto>
                    <p className='preco'>
                        <span>R$</span>
                        {preco}
                    </p>
                    <Avaliacao>
                        <FaStar color='yellow' />
                        <p className='valor-avaliacao'>4.5</p>
                    </Avaliacao>
                </PrecoProduto>
                {/* <BotaoAdicionar>Adicionar</BotaoAdicionar> */}
            </Titulo>
        </Card>
    )
}

export default Produto