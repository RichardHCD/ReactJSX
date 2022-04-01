import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {

  function handleButtonClick(){
    alert('Clicou no botão')
  }

  function sum(a,b){
    return a + b;
  }

  // conceito de estado do component
  // sempre que eu quiser algo na tela esteja reagindo ao
  // comportamento da minha aplicação;
  // isto é a base do React...
  // reagir ao comportamento, eu tenho que criar um estado ou State
  const [contador, setContador]= useState(0);
  // a função useState vai criar um state e vai retonar a variavel
  // qua vai retornar o estado(contador) e a função que vai alterar o
  // estado(setcontador)
  // sempre que eu quiser mudar o valor e notificar o frontend,
  // chamo a função que vai alterar a variável...
  // que vai ser devolvida para o frontend
  // (esta é a comunicação do State com o frontend)

  // let contador = 0;
  function handleButtonContar(){
    // contador = contador + 1;
    // contador++;
    setContador(contador+1);
  }

  return (
    <div className="App">
      <Header title ="Meu Primeiro Component React"/>
      <Header title ="Um Component com Props"/>
      <h2>
        Senac Campinas
        <div>Retorno da Soma:{sum(5,6)}</div>
      </h2>
      <button onClick={handleButtonClick}>Click Me!</button>
      <Header title={contador}/>
      <button onClick={handleButtonContar}>Contar</button>
    </div>
  );
}

export default App;
