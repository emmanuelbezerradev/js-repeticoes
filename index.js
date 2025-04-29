// // // function contagem(){
// // //     let voltasValue = Number(document.querySelector("#voltas").value);

// // //     for(let i = 0; i <= voltasValue; i++){
// // //         console.log(i);
// // // }
// // // }

// // // function tabuada(){
// // //     let numeroValue = Number(document.querySelector("#numero").value);

// // //     for(let i = 0; i <= 10; i++){
// // //         console.log(`${numeroValue} x ${i} = ${numeroValue * i}`);
// // // }
// // // }

// // function darVoltas() {
// //     let voltasValue = Number(document.querySelector("#voltas").value);
// //         //inicio do loop, parada do loop, incremento do loop
// //     for (let i = 1; i <= voltasValue; i++) {
// //       console.log(i);
// //     }
// //   }
  
// //   function tabuada() {
// //     let numero = Number(document.querySelector("#tabuada").value);
  
// //     for (let i = 1; i <= 10; i++) {
// //       let voltas = numero * i;
// //       console.log(`${numero} x ${i} = ${voltas}`);
// //     }
// //   }
  
// //   function somarCem() {
// //     let numero = Number(document.querySelector("#somaNum").value);
// //     let contador = 0;
// //     if (numero >= 0 && numero <= 100) {
// //       for (let i = 0; i <= numero; i++) {
// //         contador += i;
// //       }
// //       alert(`A soma dos ${numero} primeiros naturais é: ${contador}`);
// //     } else {
// //       alert(`${numero}, está fora do intervalo possível para calculo`);
// //     }
// //   }
  
  
// //   function verificarPar() {
// //     let numeroDesejado = Number(document.querySelector("#exibirPar").value);
// //     for (let i = 1; i <= numeroDesejado; i++) {
// //       if (i % 2 == 0) {
// //         console.log(i);
// //       }
// //     }
// //   }
  
// //   function contarAteZero() {
// //     let numero = Number(document.querySelector("#contagemRegressiva").value);
  
// //     for (let i = numero; i >= 0; i--) {
// //       console.log(i);
// //     }
// //   }
  
// //   function exibirArray() {
  
// //     let lista = ["Arthur", "Conrado", "Ana", "Gleidson", "Ceiça", "Emanuel"];
  
// //     for (let i = 0; i < lista.length; i++) {
// //       console.log(lista[i]);
// //     }
// //   }
  
  
// //   function verificarImPar() {
// //     let numeroDesejado = Number(document.querySelector("#exibirImpar").value);
// //     for (let i = 1; i <= numeroDesejado; i++) {
// //       if (i % 2 !== 0) {
// //         console.log(i);
// //       }
// //     }
// //   }
  
// //   function fatorial() {
// //     let contador = 1
// //     let num = Number(document.querySelector("#numfatorial").value);
// //     for (let i = num; i > 1; i--) {
// //       contador *= i
// //       console.log(contador)
// //     }
// //   }
  
  
// //   function multiplicarAteDez() {
  
// //     let num = document.querySelector("#multidez").value;
// //     let resultado = 1
// //     for (let i = 1; i <= num; i++) {
// //       resultado *= i
// //       console.log(resultado);
// //     }
// //   }
    
  
// //   function criarEstrelas() {
  
// //   }
  

// function checarSenha(senha){
//     if(senha == "1234");
//     return false;
// }
//     return true;

//     function login(){}

function contagem(arr){
    let count = 0; 
    while(arr[count]){
        count++;
    }
    console.log(count);
}