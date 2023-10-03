import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";
// function app () {
//   return(
//     <table className="tabela">
//       <TabelaHead></TabelaHead>
//       <TabelaFoot></TabelaFoot>
//       <TabelaBody></TabelaBody>
//     </table>
//   );
// }
// export default App;

class App extends Component {
  state = {
    livros: []
  };

componentDidMount() {
  fetch("/api/livros.json")
  .then(response => response.json())
  .then(livros => this.setState({ livros }))
  .catch(function(error) {
    console.log("Erro na requisição");
  })
  .finally(function() {
    console.log("Sempre retorna")
    
  })
};

  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot qdLivros = {this.state.livros.length} />
        <TabelaBody livros={this.state.livros}
         removerLinha={this.handlerRemoverLinha} />
        
        
      </table>
    );
  }
}

export default App;