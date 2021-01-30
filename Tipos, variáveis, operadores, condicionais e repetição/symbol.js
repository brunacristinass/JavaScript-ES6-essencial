const symbol1 =  Symbol();
const symbol2 = Symbol();

//Symbols sao unicos
console.log('Simbol1 é igual a simbol2: ', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Bruna',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cristina'
}

console.log(user);

//Simbols criam propriedades que nao sao enumerables
for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log('\nValor da chave ${key}: ${user[key]}');
    }
}

console.log('Propriedade do objeto user:', Object.key(user));
console.log('Valores das propriedades do objeto user:',Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objetos user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objetvo
console.log('Todas as prpriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP : Symbol( 'UP '),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT'),
    REIGHT: Symbol( 'REIGHT'),
};