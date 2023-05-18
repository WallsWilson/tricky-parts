function curriedAdd(total) {
    if(total == null) {
        return 0;
    }else {
        return function(x) {
            return x + total;
            }
    }
}

module.exports = { curriedAdd };
