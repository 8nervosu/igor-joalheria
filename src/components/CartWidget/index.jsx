function CartWidget() {
    const logo = 'Joaleria';

    return (
        <div className="CartWidget">
            <h3>Carrinho</h3>
            <NavBar logoNeme={logo} sobrenome="Azevedo" />

            <NavBar logoNeme="Igor">
                <h1>Meu nome é</h1>
                <h2>Igor</h2>
            </NavBar>
        </div>
    );
}

export default CartWidget;