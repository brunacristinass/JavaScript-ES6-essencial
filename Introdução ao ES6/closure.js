function init (){
    const exemplo = "Essa variavel";

    return function(){
        console.log(`1- O valor da variavel exemplo é ${exemplo}`);

        return function(){
            console.log(`2- O valor da variavel exemplo é ${exemplo}`);

            return function(){
                console.log(`3- O valor da variavel exemplo é: ${exemplo}`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = init();

const initFn3 = init();

const initFn1 = init();

initFn3();


