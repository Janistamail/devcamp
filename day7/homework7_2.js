axios.get("https://corona.lmao.ninja/v2/countries/ ").then(function(res) {
    console.log(res);
    debugger;
    let allCovidData = res.data;
    console.log(allCovidData);
    // debugger;
    let allRecovered = allCovidData.reduce((sum, x) => sum + x.todayRecovered, 0);
    console.log(allRecovered);
    let country = allCovidData
        .filter((x) => x.todayDeaths < 10 && x.population > 100000000)
        .map((x) => x.country);
    console.log(country);
});