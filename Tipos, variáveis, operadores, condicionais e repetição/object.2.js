const user = {
    name: 'Bruna',
    lastName: 'Cristina'
}

//Recupera as chaves do objeto
console.log('Propriedade do objeto user:',Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.defineProperties(user));

//Merger propriedade de objetos
console.assign(user, {fullName: 'Bruna Cristina'});

console.log('\nAdiciona a propriedade fullName no objeto user:', user); //Criando um novo array
console.log('\nRetorna um novo objetvo margeando dois ou mais objetos:', Object.assign({}, user,{age: 26}));

//Previne todas as alterações em um objeto

const newObjt = {foo: 'bar'};
Object.freeze(newObjt);   // freeze = Nao consegue alterar

newObjt.foo = 'changes';
delete newObjt.foo;
newObjt.bar = 'foo';

console.log('\nVariavel newObj apos as alterações:', newObjt);

//Permite apenas a alteração da propriedade existente em um objeto
const person = { name: 'Bruna'};
Object.seal(person); //seal= congela tudo, nao permitindo criação nem deletar  propriedade.

person.name = 'Bruna Cristina';
delete person.name;
person.age = 26;

console.log('\nVariavel person apos as alteraçoes:', person);