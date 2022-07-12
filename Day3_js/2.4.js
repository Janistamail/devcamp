let sum = "";
let count = 0;
const draw = function(n) {
    for (let i = 0; i < n * 2 - 1; i++) {
        if (i < n) {
            count++;
        } else {
            count--;
        }
        for (let j = 0; j < n; j++) {
            if (i >= j && i + j < n * 2 - 1) {
                sum += count.toString();
            } else {
                sum += "_";
            }
        }
        sum += "\n";
    }
    console.log(sum);
};
draw(3);
// 0 1
// 1 2
// 2 3
// 3 2
// 4 1