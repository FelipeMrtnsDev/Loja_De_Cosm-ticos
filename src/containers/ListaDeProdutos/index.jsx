import Produto from "../Produto";
import { produtos } from "../../models/produtos";
import { ContainerProdutos } from "./styles";

function ListaDeProdutos() {
    return(
        <ContainerProdutos>
            {produtos.map((produto) => (
                <Produto alt={produto.titulo} descricao={produto.descricao} image={produto.imagemUrl} preco={produto.preco} titulo={produto.titulo} id={produto.id}/>
            ))}
        </ContainerProdutos>
    )
}

export default ListaDeProdutos