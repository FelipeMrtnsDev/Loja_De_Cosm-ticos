import Carrosel from "../../components/Carrosel";
import ListaDeProdutos from "../../containers/ListaDeProdutos";
import { HomeContainer, MaxSizing } from "./styles";

function Home() {
    return(
        <HomeContainer>
            <Carrosel />
            <MaxSizing>
                <ListaDeProdutos />
            </MaxSizing>
        </HomeContainer>
    )
}

export default Home