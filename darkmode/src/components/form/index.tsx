export const Form = () =>{
  return(
    <div className="main">
      <p className="sign">Form de Cadastro</p>

      <form className="form">
        <input type="text" className="username" placeholder="Usuário"/>
        <input type="password" className="password" placeholder="Senha"/>

        <a href="#" className="submit">
          Entrar
        </a>

        <p className="forgot">
          <a href="#" id="forgot">
            Esqueceu a senha?
          </a>
        </p>
      </form>
    </div>
  );
}