let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");
city = city.trim();
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temp = Math.round(weather[city].temp);
  let fanTemp = Math.round(temp * 1.8 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${temp}℃(${fanTemp}℉) in ${city} with a humidity of ${humidity}% `
  );
} else {
  alert(
    `Sorry, we know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
