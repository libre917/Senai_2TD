import '../home.css'
import './produtos.css'

export default function Produtos(){
    const produtos = [
       {
        id:1,
        nome:'Garrafa',
        descricao:'Térmica e prateada',
        img:'/garrafa.jpg',
        preco:10.70
       },
       {
        id:2,
        nome:'Mouse',
        descricao:'Preto',
        img:'/mouse.jpg',
        preco: 15.90
       },
       {
       id:3,
       nome:'empregado',
       descricao:'Faz as tarefas à base de chicotadas',
       img:'/homem.jpg',
       preco: 0.00
       },
       {
        id:4,
        nome:'Tênis',
        descricao:'muito caro',
        img:'/tenis.jpg',
        preco: 799.99
       }
    ]
  return(
    <>
    <main>
        <div className='cards-container'>
            {produtos.map((produto) =>(
              <div key={produto.id} className='card'>
                <figure>
                    <img src={produto.img} alt={produto.nome} />
                </figure>
                <h2>{produto.nome}</h2>
                <h4>{produto.preco ? produto.preco.toFixed(2) : "Gratuito"}</h4>
                <p>{produto.descricao}</p>
                <button>Comprar</button>
              </div>
            ))}
        </div>
    </main>
    </>
  )
}