let sum = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j >= i) {
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