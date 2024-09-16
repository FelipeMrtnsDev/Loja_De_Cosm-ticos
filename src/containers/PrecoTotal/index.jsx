import { selectProdutoPrecoTotal } from "../../store/reducers/carrinho/selectors"
import { BotaoComprar, Desconto, PrecoLiquido, PrecoTotalCard } from "./styles"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function PrecoTotal() {

    const { produtos } = useSelector((state) => state.carrinho);
    const navigate = useNavigate()
    const valorTotal = useSelector(selectProdutoPrecoTotal)

    const handleComprar = () => {
        const queryParams = produtos.map(produto => `${produto.quantidade}`);
        const url = `/checkout/payment/${queryParams}`;

        navigate(url)
    }

    // console.log(valorTotal)

    return(
        <PrecoTotalCard>
            <div>
                <PrecoLiquido>
                    <h2>Preco Liquido:</h2>
                    <p>{valorTotal}</p>
                </PrecoLiquido>
                <Desconto>
                    <h2>Desconto:</h2>
                    <p>0,00</p>
                </Desconto>
            </div>
            <BotaoComprar onClick={handleComprar}>Comprar</BotaoComprar>
        </PrecoTotalCard>
    )
}

export default PrecoTotal