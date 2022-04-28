/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const openMap = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
      ]);
      const closeMap = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
      ]);
      const stack = [];
    
    for(i = 0; i < s.length; i++){
        if(openMap.get(s[i])){
            stack.push(s[i])
        } else{
            const current = stack.pop()
            
            if(current !== closeMap.get(s[i])){
                return false;
            }
        }
    }
    
    return stack.length === 0
};