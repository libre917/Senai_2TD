const {dividir, somar} = require('./matematica');

describe("Função somar:", ()=>{
    it('Ela deve somar o valor a com o valor b, corretamente', ()=>{
        expect(somar(2,3)).toBe(5)
    })
    it('Deve somar numeros positivos e negativos corretamente', ()=>{
        expect(somar(-2,3)).toBe(1)
    })
    it('Deve somar numeros negativos corretamente', ()=>{
        expect(somar(-2,-3)).toBe(-5)
    })
})

describe("Função dividir:", ()=>{
    it('Deve dividir dois numeros positivos corretamente', ()=>{
        expect(dividir(10,2)).toBe(5);
    })
})