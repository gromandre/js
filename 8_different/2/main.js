 function conditionCheck(type, arg) {
    if(typeof(arg) === typeof(type)){
        if(typeof(type) === 'number' && !isNaN(type) && isNaN(arg)){
            return false;
        }
        if(typeof(type) === 'object' && (type !== null) && (arg === null)){
            return false;
        }
         if(typeof(type) === 'object' && !Array.isArray(type) && Array.isArray(arg)){
            return false;
        }
        if(typeof(type) === 'object' && Array.isArray(type) && !Array.isArray(arg)){
            return false;
        }
        if(typeof(type) === 'number' && isNaN(type) && !isNaN(arg)){
            return false;
        }
        if(typeof(type) === 'object' && (type === null)&&(arg !== null)){
            return false;
        }

        return true;

    }else{
        return false;
    }
} 

function filterByType(type, ...args) {
    return args.filter(function(arg) {
        return conditionCheck(type, arg);
    })
}