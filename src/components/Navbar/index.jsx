import "./style.css";
import CartWidget from "../CartWidget";

function Navbar({LogoName, sobrenome, children}) {
    return (
        <div className="Navbar">
            <h1>{LogoName} {sobrenome}</h1>

            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Produtos</li>
                </ul>
            </nav>
            {children}
            <CartWidget/>
        </div>
    );
}

export default Navbar;