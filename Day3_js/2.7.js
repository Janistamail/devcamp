let sum = "";
const draw = function(n) {
    for (let i = 1; i <= n * 2 - 1; i++) {
        for (let j = 1; j <= n; j++) {
            if (i + j <= n || i - j >= n) {
                sum += "_ ";
            } else {
                sum += "* ";
            }
        }
        sum += "\n";
    }
    console.log(sum);
};
draw(4);