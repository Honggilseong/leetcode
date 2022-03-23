/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let answer = 0;
    
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++"){
            answer += 1;
        } else {
            answer -= 1;
        }
    }
    return answer
};