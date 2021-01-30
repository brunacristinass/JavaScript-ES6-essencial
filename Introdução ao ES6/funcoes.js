function getName(){
    return "Bruna Cristina";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
