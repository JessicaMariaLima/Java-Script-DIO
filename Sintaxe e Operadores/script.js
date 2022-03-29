
    var num1 = Number(prompt ("Digite um número"));
    var num2 = Number(prompt ("Digite o segundo número"));
    let resultado;
    var soma = num1 + num2;


function compareNumber (){
    var saoIguais = num1 === num2;
    if (saoIguais){
     var primeira =  alert (`O número ${num1} e o número ${num2} são iguais`);
    } else {
       var segunda = alert ('Os números não são iguais');
    } 
 }
compareNumber();  


 function sumNumber(){
    
    if (soma < 10){
    var somaDez = alert ("Sua soma é maior que dez");
    } else {
    soma > 20
    var somaVinte = alert ("Sua soma é menor que 20");
}}
sumNumber();

function message(){
    alert(`A soma de ${num1} e ${num2} é ${soma}`);

}
message();

/*function mensagem (primeira, ) {
    console.log (primeiro, segundo)
}
mensagem ('Tudo certo,', 'jovem');

*/
