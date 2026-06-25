import './Login.css'
function Login (){
    return(
        <div className="Login-conteiner">
    
             <h2>Login</h2>
             <input type='text' placeholder='usuário'></input>
             <input type='text' placeholder='senha'></input>
             <button id='bt_clique'>Enviar</button>

             <p>Esqueceu sua senha?</p>
             


        </div>

       

    )
}

export default Login