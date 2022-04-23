let newPeople;

function mufunc(callback) {
    axios.get("homework1-4.json").then(function(res) {
        let arr = res.data;
        newPeople = arr
            .filter((x) => x.gender == "male" && x.friends.length >= 2)
            .map((x) => {
                return {
                    name: x.name,
                    gender: x.gender,
                    company: x.company,
                    email: x.email,
                    friends: x.friends,
                    balance: dollar(x.balance),
                };
            });
        console.log(newPeople);
        callback();
        // debugger;
    });
}

function dollar(n) {
    var number = Number(n.replace(/[^0-9.-]+/g, ""));
    number = number / 10;
    let dollarUSLocale = Intl.NumberFormat("en-US");
    number = `$` + dollarUSLocale.format(number);
    return number;
}

function myop() {
    let sum = `<table class="table">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">name </th>
            <th scope="col">gender </th>
            <th scope="col">company </th>
            <th scope="col">email </th>
            <th scope="col">friends </th>
            <th scope="col">balance </th>
        </tr>
    </thead>
    <tbody>`;
    for (i in newPeople)
        sum += `
            <tr>
                <th scope="row"></th>
                <td>${newPeople[i].name}</td>
                <td>${newPeople[i].gender}</td>
                <td>${newPeople[i].company}</td>
                <td>${newPeople[i].email}</td>
                <td>${frd()}</td>
                <td>${newPeople[i].balance}</td>
            </tr>
        `;
    sum += `</tbody></table>`;
    document.getElementById("op").innerHTML = sum;
}

function frd() {}
// debugger;
mufunc(function() {
    console.log(newPeople);
    myop();
});