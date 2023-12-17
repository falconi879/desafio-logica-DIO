/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Mirar:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 10 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let vitoria = 103
let derrota = 2

console.log()
console.log("CALCULADORA DE PARTIDAS RANKEADAS ")

let resultado = calculadora(vitoria, derrota)
if(resultado < 10){
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Ferro}** ")
    console.log()
}else if(resultado>=10 && resultado<20){
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Bronze}**")
    console.log()
}else if(resultado>=20 && resultado<=50){
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Prata}**")
    console.log()
}else if(resultado>50 && resultado<=80){
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Ouro}**")
    console.log()
}else if(resultado>80 && resultado<=90){
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Diamante}**")
    console.log()
}else if(resultado>90 && resultado<=100){
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Lendário}**")
    console.log()
}else {
    console.log()
    console.log("O heroi tem saldo de **{"+ resultado + "}**  está no nivel **{Imortal}**")
    console.log()
}

function calculadora(vitoria, derrota){
 let resultado = vitoria - derrota
 return resultado
}
