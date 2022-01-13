  {/* sempre lembrar na hora de criar css criar pasta com nome dentro com arquivo index */}
  {/* pois o react chama na pasta o arquivo principal   */}
  {/* para importar usar comando import "./arquivo.css";  */}

import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  
   constructor(){
     super();
     this.notas =[];
     this.notas
   }

  criarNota(titulo, texto){
   const novaNota = {titulo,texto};
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>    {/* formulario chamando propriedade criar nota  */}
        <ListaDeNotas notas={this.notas}/>   {/* propriedade chamada notas recebendo atributo notas com array  */}
      </section>
    );
  }
}


export default App;
