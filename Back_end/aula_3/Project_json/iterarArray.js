const dados ={
    produtos: [
        {
            nome: "produto 1", 
            preco: 10
        },
        {
            nome: "produto 2", 
            preco: 20
        },
        {
            nome: "produto 3", 
            preco: 30
        }
    ]
}
dados.produtos.forEach(produto=>{
console.log(`nome ${produto.nome} e preço ${produto.preco} `)
})