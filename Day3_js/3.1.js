let sum = "";
const draw = function(n) {
    for (let i = 1; i <= n * 2 - 1; i++) {
        for (let j = 1; j <= n * 2 - 1; j++) {
            if (i <= n) {
                if (i + j <= n || j - i >= n) {
                    sum += "_ ";
                } else {
                    sum += "* ";
                }
            } else {
                if (i - j >= n || i + j - 2 * n >= n) {
                    sum += "_ ";
                } else {
                    sum += "* ";
                }
            }
        }
        sum += "\n";
    }
    console.log(sum);
};

draw(4);