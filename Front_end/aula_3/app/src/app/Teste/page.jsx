import '../home.css';
import './teste.css';

export default function teste(){
    const produtos = [
        {
            id: 1,
            nome:'Café',
            preco: 32.50,
            descricao: 'Importado de São Paulo'
        },
        {
            id: 2,
            nome:'Cerveja',
            preco: 8.90,
            descricao: 'Não é uma Heineken'
        },
        {
            id: 3,
            nome:'Feijão',
            preco: 28.90,
            descricao: 'Feijão importado'
        }
    ]
    const pessoas =[
        {
            id:1,
            img:"/pessoa_4.jpg",
            nome:"Jhon da Silva",
            cargo:"Desenvolvedor"
        },
        {
            id:2,
            img:"/pessoa_3.avif",
            nome:"Jhoana da Silva",
            cargo:"Desenvolvedora"
        },
        {
            id:3,
            img:"/pessoa_2.avif",
            nome:"Rozane da Silva",
            cargo:"Serralheira"
        },
        {
            id:4,
            img:"/pessoa_1.avif",
            nome:"Larissa da Silva",
            cargo:"Sei lá"
        }
    ]
    return(
        <>
        <h1>Lista de compras</h1>
        <div className='Lista'>
        {produtos.map((produto) =>(
            <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>Preço: R$ {produto.preco ? produto.preco.toFixed(2) : "0.00" }</p>
            <p>{produto.descricao}</p>
        </div>
    ))}
    </div>
    <h1>Lista de Pessoas</h1>
    <div className='cards-container'>
        {pessoas.map((pessoa) =>(
            <div className="card" key={pessoa.id}>
            <figure>
                <img src={pessoa.img} alt={pessoa.nome} />
            </figure>
            <h2>{pessoa.nome}</h2>
            <h3>{pessoa.cargo}</h3>
        </div>
        ))}
    </div>
        </>
    )
}