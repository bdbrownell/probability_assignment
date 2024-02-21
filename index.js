
function main() {
    const probabilities = calculateProbabilities();
    console.log(probabilities);
}

function calculateProbabilities() {
    const probabilities = [];

    for (let k = 6; k <= 99; k++) {
        //probability formula 
        // 1 - (k-1/k)^2
        const probability = 1 - Math.pow((k - 1) / k, 2);
        probabilities.push(probability.toFixed(6));
    }

    return probabilities;
}

main()

module.exports = {
    calculateProbabilities
}
