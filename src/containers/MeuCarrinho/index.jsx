import { useSelector } from "react-redux"
import ItemCarrinho from "../ItemCarrinho"
import { MyCart } from "./styles"

function MeuCarrinho() {

    const { produtos } = useSelector((state) => state.carrinho)

    console.log(produtos)

    return(
        <>
            <MyCart>
                <h2>Meu Carrinho</h2>
                <hr />
            </MyCart>
            {produtos.map((produto) => <ItemCarrinho produto={produto} key={produto.id} />)}
        </>
    )
}

export default MeuCarrinho