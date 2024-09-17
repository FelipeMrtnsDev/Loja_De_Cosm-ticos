import Produto from "../Produto";
import { produtos } from "../../models/produtos";
import { ContainerProdutos, H1Container } from "./styles";

function ListaDeProdutos() {
    return(
        <>
            <H1Container>
                <h1>Produtos</h1>
            </H1Container>
            <ContainerProdutos>
                {produtos.map((produto) => (
                    <Produto alt={produto.titulo} descricao={produto.descricao} image={produto.imagemUrl} preco={produto.preco} titulo={produto.titulo} id={produto.id}/>
                ))}
            </ContainerProdutos>
        </>
    )
}

export default ListaDeProdutos