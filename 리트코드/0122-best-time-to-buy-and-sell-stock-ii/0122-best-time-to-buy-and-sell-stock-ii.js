/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = -1;

    for (let i = 0; i < prices.length; i++) {
        const todayPrice = prices[i];

        if (buy >= 0) {
            profit += todayPrice - buy;
            buy = -1;
        }

        if (i < prices.length - 1 && todayPrice < prices[i + 1]) {
            buy = todayPrice;
        }
    }

    return profit;
};