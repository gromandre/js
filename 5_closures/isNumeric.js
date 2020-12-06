(function(){
    function isNumeric(userNumber) {
        return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
    };

    window.isNumeric = isNumeric;
})();