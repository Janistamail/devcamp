let arr = [3, 1, 2, 4, 5];
for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (i > j) {
            minIndex = j;
        }
    }
    let numMin = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = numMin;
}