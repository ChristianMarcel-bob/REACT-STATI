import Header from "./components/Header";
import Login from "./components/login";
import CardProd from "./components/Cardprod"; 
import Contador from "./components/Contador";
import Calculadora from "./components/Calculadora";
import "./App.css";

function App (){
  return (
    <>
     <Header titulo="Lanchonete Xpress"
     subtitulo="O Melhor da Região" />

<Login />

<CardProd nome="X-Burger"
preco="15,50" />
<CardProd nome="X-Salada"
preco="17,90"/>
<CardProd nome="Refrigerante"
preco="6,00"/>
<CardProd nome="João"
cargo="Atendente"/>

<Contador />

<Calculadora />



    </>

  )
}
export default App
