exports.picker = function (prices) {
    let result = []
    let maxProfit=0
    for (i = 0; i < prices.length; i++) {
        for (k = i+1; k < prices.length; k++) {
            if ((prices[k] - prices[i]) > maxProfit && i<k) {
                maxProfit=prices[k] - prices[i]
                result= [i,k]
    }}}
    return result
}

