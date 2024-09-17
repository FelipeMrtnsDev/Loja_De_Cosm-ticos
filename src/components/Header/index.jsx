import { FiMenu } from "react-icons/fi";
import { Itens, NavBar } from "./styles";
import BarraLateral from "../BarraLateral";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(prevState => !prevState);

    return (
        <NavBar>
            <Itens >
                <Link to='/'>
                    <h1>AS CLINIC</h1>
                </Link>
                <FiMenu onClick={toggleSidebar} size={30} color="black" />
            </Itens>
            <BarraLateral open={isOpen} toggleSidebar={toggleSidebar} />
        </NavBar>
    );
}

export default Header;
