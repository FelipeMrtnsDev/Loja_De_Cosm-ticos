import { FiShoppingCart } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { Itens, SideBar, Close } from "./styles";
import { Link } from "react-router-dom";

function BarraLateral({ open, toggleSidebar }) {
    return (
        <SideBar open={open}>
            <Close>
                <IoClose className="close" onClick={toggleSidebar} color="black" />
            </Close>
            <Itens as={Link} to='/'>
                <GoHome /> 
                <p>Home</p>
            </Itens>
            <Itens as={Link} to='/carrinho'>
                <FiShoppingCart /> 
                <p>Carrinho</p>
            </Itens>
        </SideBar>
    );
}

export default BarraLateral;