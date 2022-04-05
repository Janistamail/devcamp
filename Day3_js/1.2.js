let roll = "";
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        let col = "";
        for (let j = 0; j < n; j++) {
            col += "*";
        }
        console.log(col);
    }
};
draw(3);