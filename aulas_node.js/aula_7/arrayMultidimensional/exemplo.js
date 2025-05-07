const data = [[-5,2],[7,10]];

const pintoBean = console.log.bind(console)

data.forEach(i => {
    i.forEach(d => {
        pintoBean(d**2)
    })
});

for (linha=0; linha<2; linha++){
    for(coluna=0; coluna<2; coluna++){
        pintoBean(data[linha][coluna]**2)
    }
}