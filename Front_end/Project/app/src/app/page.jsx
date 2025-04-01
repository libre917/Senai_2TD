"use client";

import { useState } from "react";

export default function listaDeCompras() {
  const produtos = [
    { id: 1, nome: "Café", preco: 25.99 },
    { id: 2, nome: "Açúcar", preco: 4.59 },
    { id: 3, nome: "Leite Integral", preco: 6.79 },
    { id: 4, nome: "Pão Francês", preco: 0.85 },
    { id: 5, nome: "Manteiga", preco: 7.5 },
  ];
//Estado para armazenar quantidades temporarias escolhidas pelo usuario
  const [quantidades, setQuantidades] = useState({}) 

//Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState([])
  //função que adiciona um produto com quantidade à lista de compras
  const adicionarProduto = (produto) => {
    const quantidade = parseInt(quantidades[produto.id]) || 1;

    //Verifica se o produto já foi adicionado à lista

    const existe = listaCompras.find((item) => item.id === produto.id);

    if(existe){
      //atualiza a quantidade de produtos existente
      setListaCompras(
        listaCompras.map((item) => 
        item.id === produto.id ? {...item, quantidade: item.quantidade + quantidade} : item)
      )
    } else {
      //adicioma um produto à lista
      setListaCompras([...listaCompras, {...produto, quantidade}])
    }
  }

  const valorTotal = listaCompras.reduce(
    (total, item) => total + item.preco * item.quantidade, 0
  );
  
  //Função para atualizar a quantidade temporaria

  const atualizarQuantidade = (id, valor) => {
    setQuantidades({...quantidades, [id]:valor})
  }

  return (
    <div className="container">
      <h1>Produtos Disponíveis</h1>
      <ul>
        {produtos.map((produto)=>( 
           <li key={produto.id}>
          {produto.nome} - R$ {produto.preco.toFixed(2)}
          <input
            type="number"
            min="1"
            placeholder="Quantidade"
            value={quantidades[produto.id] || ""}
            onChange={(e) => atualizarQuantidade(produto.id, e.target.value)}
            style={{ margin: "0 10px" }}
          />
          <button onClick={() => adicionarProduto(produto)}>Adicionar</button>
        </li>))}
      
      </ul>

      <h1>Lista de Compras</h1>

    
        {listaCompras.length === 0 ? (
          <p>Nenhum item cadastrado</p>
        ) : (
          <ul>
            {listaCompras.map((item)=>(
              <li key={item.id}>
               {item.nome} - Quantidade: {item.quantidade} - Preço total: R$ {""}{(item.preco * item.quantidade).toFixed(2)}
              </li>
            ))}
          </ul>
        )}

<h2>Valor Total das Compras: R$ {valorTotal.toFixed(2)}</h2> 

    </div>
  );
}

