let sum = 2;
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        console.log(sum);
        sum += 2;
    }
};
draw(4);