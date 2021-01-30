let user = {
    name: 'Bruna'
};

//Alternando a  propriedade de um objetvo
user.name =  'Outro nome 1';
//console.log(user);
user['name'] = 'Outro nome 2';  //estrutura array 

//console.log(user);
const prop = 'name';
user[prop] = 'Outro nome 3';

//console.log(user);


//Criando uma propriedade
user.lastName = 'Cristina';

//Deletando uma propriedade
delete user.name;