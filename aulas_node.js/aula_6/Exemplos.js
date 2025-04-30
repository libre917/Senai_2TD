const notas = [10, 7, 4]

// notas.push('abc')

// console.log(notas.sort((a, b) => b - a ))

// notas.splice(1,0, 50 )

// console.log(notas)

// notas.pop()

// console.log(notas)

notas.forEach(nota => {
    console.log(nota ** 2)
    
});

for (nota in notas) {
    console.log(notas[nota] ** 2)
}