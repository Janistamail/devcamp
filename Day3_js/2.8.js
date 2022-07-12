let sum = "";
let y = 1;
const draw = function(n) {
    for (let i = 1; i <= n * 2 - 1; i++) {
        for (let j = 1; j <= n; j++) {
            if (i + j <= n || i - j >= n) {
                sum += "_ ";
            } else {
                sum += y.toString() + " ";
                y++;
            }
        }
        sum += "\n";
    }
    console.log(sum);
};
draw(4);