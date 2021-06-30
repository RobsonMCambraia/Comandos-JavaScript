//declaração de variáveis
var nome = "Robson"
var f1 = "andar em pé é diferente"
var f2 = "EU AMO VOCÊ"
var idade = 18
var ano = 2021
var frutas1 = ["banana", "maçã", "tangerina"]
var frutas2 = [{nome2: "banana", cor: "amarelo"} , {nome2: "maçã", cor: "vermelho"}, {nome2: "tangerina", cor: "laranja"}]
var nome2 = []
var cor = []

//mostra um "pop up" na aba
alert ("bem vindo(a), " + nome + "! Você tem: " + idade + " anos" + " e nasceu em: " + (ano - idade))

//console.log mostra no console
console.log ("Olá")
console.log ("Você é o " + nome)

console.log (frutas1[2])
alert (frutas1[0])

//.replace troca uma parte da string
console.log(f1.replace("em pé","deitado"));

//.toUppercase deixa tudo maiúsculo
console.log(f1.toUpperCase());

//.tolowercase deixa tudo minúsculo
console.log(f2.toLowerCase());

//o comando ".push" adiciona um valor
frutas1.push("tomate")
console.log(frutas1)
console.log(frutas1[3]);

//comando ".pop" tira um valor
frutas1.pop()
console.log(frutas1)

//o comando ".length" mostra a quantidade de elementos de uma matriz
console.log(frutas1.length);

//o comando ".reverse" deixa a lista ao contrário
console.log(frutas1.reverse());

//.tostring mostra os valores em uma string
console.log(frutas1.toString());
console.log("pode mostrar tbm apenas uma array");
console.log(frutas1.toString()[2]);

/*O join()método retorna a matriz como uma string.

Os elementos serão separados por um separador especificado*/
console.log(frutas1.toString())
console.log(frutas1.join(" | "));

//dicionário
console.log(frutas2[1].nome2)
console.log(frutas2[1].cor);

alert("Fim")
