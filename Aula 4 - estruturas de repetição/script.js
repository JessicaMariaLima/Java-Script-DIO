var  jogador1=0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log ('Os jogadores são válidos'): console.log ('Jogadores Inválidos');
/*
    if (jogador1 > 0  && jogador2 == 0){
    console.log ('Jogador 1 marcou ponto!');
    placar = jogador1> jogador2;

 // else if é utilizado para delimitar o jogador2
 
}else if (jogador2> 0 && jogador1 == 0){
     console.log ('Jogador 2 marcou ponto!');
placar = jogador2 > jogador1;

}else {
    console.log ('Ninguém marcou ponto');
}
 switch (placar) {
     case placar = jogador1 > jogador2:
         console.log ('jogador 1 ganhou');
         break;
         case placar = jogador2 > jogador1: 
         console.log ('jogador 2 ganhou');
         default:
        console.log ('Ninguem ganhou')

 } 
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }
/*
// FOR EXECUTA UMA INSTRUÇÃO ATÉ QUE ELA SEJA FALSA
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
//for/in executa repetição a partir de uma propriedade do array
for (let i in array){
    console.log (i);
}
// com object 
for (i in object){
    console.log (i); 
}

for (i of array) {
   console.log (i);
}
*/
for (i of object.propriedade1) {
    console.log (i)
}