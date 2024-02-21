const { calculateProbabilities } = require('./index');
const assert = require('assert');

function test(){
    try{
        const probabilities = calculateProbabilities();
        assert(probabilities.length === 94);
    }catch(e){
        console.log('should return 94 probabilities')
        console.log(e);
    }
};

test();