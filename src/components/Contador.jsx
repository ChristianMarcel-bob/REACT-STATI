import { useState } from "react"
function Contador(){

    const [contador,setContador] = useState(0)

    return(

        <>
        <h1>{contador}</h1>

        <button className="contador-botao" onClick={() => setContador(contador + 1)}>Adicionar</button>
        <button className="contador-botao" onClick= {() =>
             setContador(Math.max(contador - 1, 0))}>Remover</button>
    
        
        
        
        </>
    )
}

export default Contador
