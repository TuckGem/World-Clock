setInterval(function () {
  let losElement = document.querySelector("#los");
  let losDateElement = losElement.querySelector(".date");
  let losTimeElement = losElement.querySelector(".time");
  let losTime = moment().tz("America/Los_Angeles");
  losDateElement.innerHTML = losTime.format("MMMM Do YYYY");
  losTimeElement.innerHTML = losTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  let vaticanElement = document.querySelector("#vatican");
  let vaticanDateElement = vaticanElement.querySelector(".date");
  let vaticanTimeElement = vaticanElement.querySelector(".time");
  let vaticanTime = moment().tz("Europe/Vatican");
  vaticanDateElement.innerHTML = vaticanTime.format("MMMM Do YYYY");
  vaticanTimeElement.innerHTML = vaticanTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");
  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} 
            <small>${cityTime.format("A")}</small></div>
        </div> 
        <a href="index.html">All cities</a>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
