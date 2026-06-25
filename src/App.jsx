import Header from "./components/Header";
import Login from "./components/login";
import CardProd from "./components/Cardprod"; 

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
    </>

  )
}
export default App
