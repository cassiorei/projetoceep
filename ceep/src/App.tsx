import React from 'react';
import  listaDeNotas  from "./components/ListaDeNotas";
function App() {
  return (
 <section>
 <form>
   <input type="text" placeholder="titulo"/>
   <textarea placeholder="escreva sua nota..."/>
   <button>Criar Nota</button>
  </form>
   <listaDeNotas/> 
  </section>
  );
  }

export default App;
