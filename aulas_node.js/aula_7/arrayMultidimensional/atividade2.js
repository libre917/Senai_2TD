const readline = require('readline-sync')
const palmeiras = console.log.bind(console)

// const data = readline.question('Digite seu nome, telefone e email:\n').split(' ')



// const o = {
//     muchacho: 'boy',
//     nome: 'lucas',
//     email: 'lucas@gmail.com',
// }

// for ( let key in o ){
//   const a = o[key]
//   palmeiras(key, '->', a)
// }


const notas = {
    juca: {
        mat: 10,
        bio:7
    },
    jeca: {
        mat:8,
        bio:3
    }
}

for (let nome in notas){
   for ( let nota in notas[nome]){
    palmeiras(`${nome}: ${nota}: ${notas[nome][nota]}` )
   }
}


// const notas = {
    //   juca: {
    //     mat: 10,
    //     bio: 7,
    //   },
    //   jeca: {
    //     a: {
    //       b: {
    //         c: {
    //           d: {
    //             e: {
    //               f: {
    //                 g: {
    //                   h: {
    //                     i: {
    //                       j: {
    //                         k: {
    //                           l: {
    //                             m: {
    //                               n: {
    //                                 o: {
    //                                   p: {
    //                                     q: {
    //                                       r: {
    //                                         s: {
    //                                           t: {
    //                                             u: {
    //                                               v: {
    //                                                 w: {
    //                                                   x: {
    //                                                     y: {
    //                                                       z: "oi",
    //                                                     },
    //                                                   },
    //                                                 },
    //                                               },
    //                                             },
    //                                           },
    //                                         },
    //                                       },
    //                                     },
    //                                   },
    //                                 },
    //                               },
    //                             },
    //                           },
    //                         },
    //                       },
    //                     },
    //                   },
    //                 },
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // };
    
    // console.log(notas.jeca.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z);
    // console.log(notas)