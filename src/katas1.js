//------------------------------------------------------------
//Função para listar números de 1 a 20
function oneThroughTwenty() {
  let n=1
  let numero=[]
  while(n<=20) {//loop para números de 1 a 20
    numero.push(n)
    n++
  }
  return numero
}
console.log(oneThroughTwenty())//Imprimir os números

//----------------------------------------------------------
//Função para listar números pares de 1 a 20
function evensToTwenty() {
  let n=1
  let numero=[]
  while(n<=20) {//loop para números de 1 a 20
    if (n%2==0){//Condição para ser número par
    numero.push(n)
    }
  n++
  }  
  return numero  
}
console.log(evensToTwenty())//Imprimir os números
 
//---------------------------------------------------------
  //Função para listar os números ímpares de 1 a 20
function oddsToTwenty() {
  let n=1
  let numero=[]
  while(n<=20){//loop para números de 1 a 20
    if (n%2!=0){//Condição para ser número ímpar
    numero.push(n)
    }
  n++
  }
  return numero
}
console.log(oddsToTwenty())//Imprimir os números
 
  //--------------------------------------------------------
//Função para retornar os múltiplos de 5 até 100
function multiplesOfFive() {
  let n=5
  let numero=[]
  while(n<=100){//loop para números de 5 até 100
    if (n%5==0){//Condição para ser múltiplo de 5
    numero.push(n)
    }
  n++
  } 
  return numero
}
console.log(multiplesOfFive())//Imprimir os números
 
//------------------------------------------------------------
//Função os quadrados perfeitos dos números até 100
function squareNumbers() {
    
  let n=1
  let numero=[]
  while(n<=100){//loop para os números de 1 a 100
    if (Math.sqrt(n)%1===0){//Condição para ser quadrado perfeito
    numero.push(n)
    } 
  n++
  }  
  return numero
}

console.log(squareNumbers())//Imprimir os números

//------------------------------------------------------
//Função para retornar os números de 20 a 1
function countingBackwards() {
    
  let n=20
  let numero=[]
  while(n>=1){//loop para os números de 20 a 1
    numero.push(n)
    n=n-1
  }
  return numero
}
console.log(countingBackwards())//Imprimir os números

//--------------------------------------------------------
//Função para retornar os números pares de 20 a 1
function evenNumbersBackwards() {

  let numero=[]
  let n=20
  while (n>=1){//Loop para os números de 20 a 1
    if(n%2==0){//Condição para números pares
    numero.push(n)
    }
  n=n-1
  }
  return numero
}
console.log(evenNumbersBackwards())//Imprimir os números

//---------------------------------------------------------
//Função para retornar os números ímpares de 20 a 1
function oddNumbersBackwards() {
    
  let numero=[]
  let n=20
  while (n>=1){//loop para os números de 20 a 1
    if(n%2!=0){//Condição para números ímpares
    numero.push(n)
    }
  n=n-1  
  }
  return numero
}
console.log(oddNumbersBackwards())//Imprimir os números

//---------------------------------------------------------
/*Função para retornar os múltiplos de 5, 
contando de trás para frente, começando do número 100*/

function multiplesOfFiveBackwards() {
    
  let numero=[]
  let n=100
  while (n>=1){//lopp para números de 100 a 1
    if(n%5==0){//Condição para múltiplo de 5
    numero.push(n)
    }
  n=n-1  
  }
  return numero
}
console.log(multiplesOfFiveBackwards())

//---------------------------------------------------------
/*Função para retornar os quadrados perfeitos de 
trás para frente, começando no número 100*/
function squareNumbersBackwards() {
    
  let numero=[]
  let n=100
  while (n>=1){//Loop para os números de 100 a 1
    if (Math.sqrt(n)%1===0){
    numero.push(n)
    } 
  n=n-1  
  }
  return numero
}
console.log(squareNumbersBackwards())

//------------------------------------------------------------
//Never give up!