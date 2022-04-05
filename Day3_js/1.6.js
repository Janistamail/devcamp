let roll = "";
let num = 1;
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        let col = "";
        for (let j = 1; j <= n; j++) {
            col += num.toString();
            num++;
        }
        console.log(col);
    }
};
draw(3);