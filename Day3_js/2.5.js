let sum = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i + j > n) {
                sum += "* ";
            } else {
                sum += "_ ";
            }
        }
        sum += "\n";
    }
    console.log(sum);
};

draw(4);