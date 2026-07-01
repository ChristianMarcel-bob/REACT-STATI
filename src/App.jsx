import Header from "./components/Header";
import Login from "./components/login";
import CardProd from "./components/Cardprod";
import Contador from "./components/Contador";
import Calculadora from "./components/Calculadora";
import "./App.css";

function App() {

  const lanches = [{ id: 1, nome: "X-Salada", preco: "17,50" },
  { id: 2, nome: "X-Burger", preco: "15,50" },
  { id: 3, nome: "Refrigerante", preco: "6,00" }
  ]
  return (
    <>
      <Header titulo="Lanchonete Xpress"
        subtitulo="O Melhor da Região" />

      <Login />
      {
        lanches.map(
          (lanche => (
            <CardProd
              key={lanche.id}
              nome={lanche.nome}
              preco={lanche.preco}
            />
          )
          ))
}

      {/* <CardProd nome="X-Burger"
preco="15,50" />
<CardProd nome="X-Salada"
preco="17,50"/>
<CardProd nome="Refrigerante"
preco="6,00"/>
<CardProd nome="João"
cargo="Atendente"/> */}

      <Contador />

      <Calculadora />



    </>

  )
}
export default App
