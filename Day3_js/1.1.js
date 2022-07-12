let sum = "";
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        sum += "*";
    }
    console.log(sum);
};
draw(2);