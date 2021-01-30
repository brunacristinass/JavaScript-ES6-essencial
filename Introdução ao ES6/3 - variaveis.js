const name = "Bruna";

// Não podemos alterar o valor
// name = "Bruna";

const user = {
  name: "Bruna"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro nome";

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//  name: "Bruna"
//};

const persons = ["Bruna", "Cristina", "Anna"];

// Podemos adicionar novos itens
persons.push("Cristina");

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = "Anna";

console.log("\nArray após as alterações: ", persons);