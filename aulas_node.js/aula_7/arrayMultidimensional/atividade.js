const a = [[-5,8,0],[3,7,10],[1,-8,2]]
const b = [[5,7,4],[-1,-1,-1],[0,10,9]]
c=[[],[],[]];

for (linha=0;linha<3;linha++){
    for(coluna=0;coluna<3;coluna++){
        c[linha][coluna] = ( a[linha][coluna]+b[linha][coluna])
   
   
    }
}

console.log(c)