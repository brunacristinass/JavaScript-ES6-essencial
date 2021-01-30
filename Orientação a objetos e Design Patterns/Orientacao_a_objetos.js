//para rodar os códigos, deixar tudo como comentário, exceto o código a ser executado
'use strict';
const euTexto = 'Hello Prototype!';
meuTexto.split('');
//criando uma variável string chamada myText com o valor Hello Prototype!
//outra forma de declarar:
'use strict';
const myText = String('Hello prototype!');
console.log(myText.__proto__.split);
//usando uma função construtora string (com um prototype)
'use strict';
const myText = String('Hello prototype!');
console.log(myText.__proto__.split === String.prototype.split);
//true
console.log(myText.constructor === String);
//true
'use strict'
function Animal(){
    this.qtdePatas = 4;
    this.movimentar = function(){}
}
console.log(Animal.constructor);
//function
const cachorro = new Animal();
console.log(cachorro.qtdePatas);
//4
console.log(cachorro.__proto__ === Animal.prototype);
//true
console.log(cachorro.__proto__ === Function.prototype);
//true
console.log(cachorro instanceof Animal);
//true
console.log(cachorro instanceof Function);
//false
function Cachorro(morde){
    Animal.call(this,4);
    this.morde = morde;
    this.latir = function(){
        console.log('Au! Au!');
    }
}
const pug = new Cachorro(false);
console.log(pug);
//Cachorro{qtdePatas: 4, morde: false}
const pitbull = new Cachorro(true);
//Outra forma de declarar as funções
'use strict'
function Animal(){}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}
function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}
Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au! Au!');
}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
function Pessoa(name){
    this.name = name;
}
const p = new Pessoa('Bruna');
console.log(p);
//Pessoa {name: Bruna}, constructor: f Pessoa (name), __proto__:Object
function Pessoa(name){
    this.name = name;
    return{
        name: 'Teste'
    };
}
const p2 = new Pessoa('Bruna');
//exibe a palavra 'Teste'
String.prototype.split
'124646'.split('')
//quebra a string
String.prototype.split = function(){ console.log('Ixi..');}
//classes
//exemplo da função Animal com classes
'use strict';
class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4
    }
}
class Cachorro extends Animal {
    constructor(morde){
        super(4);
        this.morde = 4;
    }
}
const pug = new Cachorro (false);
console.log(pug);
//prototype com classes
'use strict'
class Animal {
    constructor(){
        this.qtdePatas = 0;
    }
    movimentar () {}
}
class Cachorro extends Animal{
    constructor(morde){
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }
    latir(){
        console.log('Au! Au!');
    }
}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
//modificadores de acesso versão nova
'use strict';
function Person(innitialName){
    let name = innitialName;
    this.getName = function(){
        return name;
    }
    this.setName = function(newName){
        name = newname;
    }
}
const p = new Person('Bruna');
'use strict'
console.log(p);
p.getName();
p.name;
p.setName('Cristina');
p.getName;
//modificadores de acesso versão antiga
'use strict';
class Person{
    #name = ' ';
    constructor(innitialName){
        this.#name = innitialName;
    }
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
}
'use strict'
console.log(p)
p.getName();
p.name;
p.setName('Cristina');
p.getName();
//encapsulamento
'use strict'
function Person(innitialName){
    var name = innitialName;
    Object.defineProperty(this, 'name', {
        get: function(){
            return name;
        },
        set: function(value){
            name = value;
        }
    });
}
//semelhante aos modificadores da versão antiga
//static
'use strict';
function Person(){}
Person.walk = function(){
    console.log('walking...');
}
console.log(Person.walk());
'use strict';
class Person{
    static walk(){
        console.log('walking...')
    }
}
console.log(Person.walk());