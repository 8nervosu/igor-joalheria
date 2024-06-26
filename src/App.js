import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer';

function App() {
  const logo = 'Joaleria'

  return (
    <div children='App'>
      <Navbar LogoName={logo} sobrenome={Azevedo}/>
      <ItemListContainer greeting={"Minha lista"}/>

    </div>
  );
}

export default App;
