function filterByType(type, ...args) {
    return args.filter(function(arg) {
        return typeof(arg) === typeof(type)
    })
}

alert(filterByType('string', 10, 20, 'a', 'b', true, false));
alert(filterByType(1, 'dasd', 2, [], 44));
alert(filterByType([1, 3, 4], [2], 'adsd', 22));
