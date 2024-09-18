import { useSelector } from "react-redux"
import ItemCarrinho from "../ItemCarrinho"
import { CartContainer, MainContainer, MyCart } from "./styles"
import PrecoTotal from "../PrecoTotal"

function MeuCarrinho() {

    const { produtos } = useSelector((state) => state.carrinho)

    produtos.forEach((produto) => {
        console.log(`Quantidade do produto ${produto.titulo}: ${produto.quantidade}`);
    });

    return(
        <>
            <CartContainer>
                <MyCart>
                    <h2>Meu Carrinho</h2>
                    <hr />
                </MyCart>
                {produtos.map((produto) => <ItemCarrinho produto={produto} key={produto.id} />)}
            </CartContainer>
            <PrecoTotal />
        </>
    )
}

export default MeuCarrinho