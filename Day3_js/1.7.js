let roll = "";
let num = 1;
let result = "";
let mark = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        let col = "";
        for (let j = 1; j <= n; j++) {
            col += num.toString();
            num++;
            if (j == n && i == n) {
                mark = "stop";
            }
        }
        if (mark != "stop") {
            col += "\n";
        }
        result += col;
    }
    return result;
};
result = draw(3);
console.log(result.split("").reverse().join(""));