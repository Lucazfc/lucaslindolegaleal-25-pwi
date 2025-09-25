//atividade 7
console.log ("ATIVIDADE 7:");
 
var num1 = 21;
var operacao = "/";
var num2 = 0;
var resultado;

if (operacao === "+") {
  resultado = num1 + num2;
} else if (operacao === "-") {
  resultado = num1 - num2;
} else if (operacao === "*") {
  resultado = num1 * num2;
} else if (operacao === "/") {
  if (num2 !== 0) {
    resultado = num1 / num2;
  } else {
    console.log("Erro! Não é possível dividir por zero.");
  }
} 
console.log("Resultado: " + resultado);