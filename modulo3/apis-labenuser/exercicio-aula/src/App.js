import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
const [Perfils, setPerfils] = useState([]);
const [inputNome, setInputNome]=useState("")
const [inputEmail, setInputEmail]=useState("")

  const body={
    name: inputNome,
    email: inputEmail
}

const myHeaders = {
  headers: {
    Authorization: "victor-lopes-barros"
  }
}

const atualizaNome = (event) => {
  setInputNome(event.target.value);
};

const atualizaEmail= (event) => {
  setInputEmail(event.target.value)
}


const getAllUsers = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", myHeaders)
  .then((response)=>{
    setPerfils(response.data.name);
    
  })
  .catch((erro)=>{
    console.log(erro.response);
  })
}



const adicionarNomeEmail = (event) => {
  event.preventDefault();

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, myHeaders)
    .then(() => {
      alert("Perfil adicionado com sucesso!");
      getAllUsers();
    })
    .catch((erro) => {
      alert("Ops! Algo deu errado!");
      
    });
  
};



  

  return (
    <div className="App">

      {Perfils.map((perfil) => {
        return <li key={perfil.id}>{perfil.name}</li>;
      })}

      <input type="text" value={inputNome} onChange={atualizaNome} placeholder='digite seu nome '></input>
      
      <input type="email" value={inputEmail} onChange={atualizaEmail} placeholder="Digite seu email"></input>
      
      <button onClick={adicionarNomeEmail}>Adicionar</button>
      
    </div>
  );
}

export default App;
