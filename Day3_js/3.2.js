let sum = "";
num = 1;
const draw = function(n) {
    for (let i = 1; i <= n * 2 - 1; i++) {
        for (let j = 1; j <= n * 2 - 1; j++) {
            if (i <= n) {
                if (i + j <= n || j - i >= n) {
                    sum += "_ ";
                } else {
                    sum += num;
                    num++;
                }
            } else {
                if (i - j >= n || i + j - 2 * n >= n) {
                    sum += "_ ";
                } else {
                    sum += num;
                    num++;
                }
            }
        }
        sum += "\n";
    }
    console.log(sum);
};

draw(4);