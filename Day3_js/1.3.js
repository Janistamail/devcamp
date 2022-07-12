let roll = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        let col = "";
        for (let j = 1; j <= n; j++) {
            col += j.toString();
        }
        console.log(col);
    }
};
draw(4);