def picker(prices):
    max_profit=0
    for i in range (0,len(prices)):
        for k in range (1,len(prices)):
            if prices[k] - prices[i] > max_profit and i<k:
                max_profit=prices[k] - prices[i]
                result= [i,k]
    return result
