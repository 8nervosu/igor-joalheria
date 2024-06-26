import {ShoppingCart} from 'feather-icons-react'
import './style.css'

function CartWidget() {
    const logo = 'Joaleria';

    return (
        <div className="CartWidget">
            <ShoppingCart size="50"/>
            <span>3</span>

            <NavBar logoNeme={logo} sobrenome="Azevedo" />

            <NavBar logoNeme="Igor">
                <h1>Meu nome é</h1>
                <h2>Igor</h2>
            </NavBar>
        </div>
    );
}

export default CartWidget;