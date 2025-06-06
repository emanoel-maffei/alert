/*                   alert.js                   */

//                                              //
//  JavaScript File -> Infinite Random Alert    //
//                                              //

function io() {
    alert('Erro encontrado, Reinicie a Página.')
}

setInterval(io, Math.round(Math.random() * 59999) + 1);
