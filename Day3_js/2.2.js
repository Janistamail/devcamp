let sum = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        let m = n;
        for (let j = 1; j <= n; j++) {
            if (m >= i) {
                sum += "* ";
            } else {
                sum += "_ ";
            }
            m--;
        }
        sum += "\n";
    }
    console.log(sum);
};
draw(4);