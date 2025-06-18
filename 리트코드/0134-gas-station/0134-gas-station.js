/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGasTank = 0;
    let currentGasTank = 0;
    let startStation = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGasTank += gas[i] - cost[i];
        currentGasTank += gas[i] - cost[i];
        if (currentGasTank < 0) {
            startStation = i + 1;
            currentGasTank = 0;
        }
    }

    return totalGasTank >= 0 ? startStation : -1;
};