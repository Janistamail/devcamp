let sum = "";
const draw = function(n) {
    for (let i = 0; i < n * 2 - 1; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= j && i + j < n * 2 - 1) {
                sum += "* ";
            } else {
                sum += "_ ";
            }
        }
        sum += "\n";
    }
    console.log(sum);
};
draw(3);