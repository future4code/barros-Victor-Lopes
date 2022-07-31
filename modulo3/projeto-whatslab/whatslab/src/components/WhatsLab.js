import React, { useState } from "react";
import { DivNomesAssuntos } from "./Style";

function WhatsLab() {
 
const [nomeAssunto, setNomeAssunto]=useState([{nome:"" , asunto:""}])    
const [remetente, setRemetente]=useState("")
const [assunto, setAssunto]=useState("")


const items = nomeAssunto.map((item, index)=>{
    return (
        <p key={index}>
            <DivNomesAssuntos>
                <h4>{item.nome}:</h4>
                <p>{item.asunto}</p>
            </DivNomesAssuntos>
        </p>
    )
})

const nomeRemetente = (event) => {
    setRemetente(event.target.value)
}

const escrevendoAssunto = (event) => {
    setAssunto(event.target.value)
}

const enviando = () => {
   const tudoNovo=[...nomeAssunto, {nome:remetente, asunto: assunto} ]
    setNomeAssunto(tudoNovo)
}

    return (

    <div>

        <div>
            {items} 
        </div>

        
        <input type="text" value={remetente} onChange={nomeRemetente} placeholder='Remetente'/>

        <input type="text" value={assunto} onChange={escrevendoAssunto} placeholder='assunto'/>

        <button onClick={enviando}>Enviar</button>

    </div>
        
    )
}

export default WhatsLab