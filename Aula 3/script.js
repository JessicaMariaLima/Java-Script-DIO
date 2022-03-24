// o que são vetores ou arrays 
/*
// como declarar um array

let array = ['string', 1, true];
console.log (array);
// pode guardar varios tipos de dados */

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
console.log(array [0]); 

/*
//forEach
array.forEach(function(item, index) {console.log (item, index)});

// push() adiciona item no final do array (de 7 passa para 8)

array.push (10);
console.log (array); 

// remove do final do array (de 7 passa para 6)
array.pop();
console.log (array);

// retorna o indice de um valor do arry

console.log(array.indexOf('string'));*/

let object = { string:'diana', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno : 'OBJETO INTERNO' }};

/*console.log (object.objectInterno);

 //desestruturar os objetos

 var string = object.string;
 console.log (string);

 var arrayInterno = object.array;
 console.log (arrayInterno);*/

 var {string, boolean, objectInterno} = object;

console.log(string, boolean, objectInterno);