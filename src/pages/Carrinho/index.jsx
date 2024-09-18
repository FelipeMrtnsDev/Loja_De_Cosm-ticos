import MeuCarrinho from "../../containers/MeuCarrinho"
import { CarrinhoContainer, MainCarrinhoContainer } from "./styles"

function Carrinho() {
    return(
        <CarrinhoContainer>
            <MainCarrinhoContainer>
                <MeuCarrinho />
            </MainCarrinhoContainer>
        </CarrinhoContainer>
    )
}

export default Carrinho