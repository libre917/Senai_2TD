const buscarDados = require('./funcaoAssincrona');

describe('Função buscarDados:', ()=>{
    it('Deve retornar dados corretamente',()=>{
        return buscarDados()
        .then(data=>{
            expect(data).toBeDefined();
            expect(data.userId).toBe(1)
        })
    })
})