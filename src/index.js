/*1️ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveiss
- Operadores
- Laços de repetição
- Estruturas de decisões

Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
let heroi = "Andre"
let experiencia = 10001


if (experiencia<=1000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel ** Ferro**")
}
else if (experiencia<=2000 && experiencia>=1000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Bronze**")
}
else if (experiencia<=5000 && experiencia>=2000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Prata**")
}
else if (experiencia<=7000 && experiencia>=5000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Ouro**")
}
else if (experiencia<=8000 && experiencia>=7000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Platina**")
}
else if (experiencia<=9000 && experiencia>=8000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Ascendente**")
}
else if (experiencia<=10000 && experiencia>=9000){
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Imortal**")
}
else {
    console.log("O heroi de nome **" + heroi + "** " + "está no nivel **Radiante**")
}