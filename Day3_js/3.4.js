let mylist = [];
const draw = function(n) {
    for (let i = 1; i <= n * 2 - 1; i++) {
        mylist.push([]);
        for (let j = 1; j <= n * 2 - 1; j++) {
            if (i <= n) {
                if (i + j <= n || j - i >= n) {
                    mylist[i - 1].push("_ ");
                } else {
                    mylist[i - 1].push("* ");
                }
            } else {
                if (i - j >= n || i + j - 2 * n >= n) {
                    mylist[i - 1].push("_ ");
                } else {
                    mylist[i - 1].push("* ");
                }
            }
        }
    }
    for (let k = 0; k < mylist.length; k++) {
        let done = "";
        for (let l = 0; l < mylist[k].length; l++) {
            done += mylist[k][l];
        }
        console.log(done);
    }
};
draw(4);