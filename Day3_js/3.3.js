let mylist = [];
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        let m = 1;
        mylist.push([]); //[[], [], [], []]
        for (let j = 0; j < n; j++) {
            if (m <= i + 1) {
                mylist[i].push("* ");
            } else {
                mylist[i].push("_ ");
            }
            m++;
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