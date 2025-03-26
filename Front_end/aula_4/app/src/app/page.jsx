"use client";
import {useState} from "react";

export default function Home() {
  const produtos = [
    {},
    {},
    {},
    {},
    {},
    {}
  ]
  const [Contador, setContator] = useState(0);
  function handleAcrescentar(){
    if (Contador >= 5){
      alert('Não acrescentar mais que 5!!')
      setContator(5)
    } else {
      setContator(Contador + 1)
    }
  }
  function handleDecremnetar(){
    if (Contador <= 0){
      alert('Não decrementar mais!!')
      setContator(0)
    } else {
      setContator(Contador - 1)
    }
  }
  return (
  <>
  <h1>Contador</h1>
  <div>
    <button type="button" onClick={handleAcrescentar}> + </button>
    <span>{Contador}</span>
    <button type="buttonMenos" onClick={handleDecremnetar}> - </button>
  </div>
  </>
  );
}
