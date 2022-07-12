let roll = "";
const draw = function(n) {
    let m = n + 1;
    for (let i = 1; i <= n; i++) {
        let col = "";
        m--;
        for (let j = 1; j <= n; j++) {
            col += m.toString();
        }
        console.log(col);
    }
};
draw(4);