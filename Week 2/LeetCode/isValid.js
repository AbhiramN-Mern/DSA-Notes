var isValid = function(s) {
    let stack = [];
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let value of s) {
        if (value === "{" || value === "[" || value === "(") {
            stack.push(value);
        } else {
            if (stack.pop() !== map[value]) return false;
        }
    }

    return stack.length === 0;
};
