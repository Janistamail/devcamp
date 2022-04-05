let result = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += i * j;
        }
        result += "\n";
    }
    return result;
};
console.log(draw(4));