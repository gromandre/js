filterByType('string', 10, 20, 'a', 'b', true, false);

function filterByType(){
    const args = [...arguments];
    const typeFirstArgs = typeof args[0];
    const result = args.filter(arg => typeof arg === typeFirstArgs);
    console.log(result);
}