function updateTime() {
  let mexicoCityDateElement = document.querySelector("#mc-date");
  if (mexicoCityDateElement) {
    let mexicoCityDate = moment()
      .tz("America/Mexico_City")
      .format("MMMM Do YYYY");
    mexicoCityDateElement.innerHTML = mexicoCityDate;

    let mexicoCityTimeElement = document.querySelector("#mc-time");
    let mexicoCityTime = moment()
      .tz("America/Mexico_City")
      .format("h:mm:ss [<small>]A[</small>]");
    mexicoCityTimeElement.innerHTML = mexicoCityTime;
  }
  let sydneyDateElement = document.querySelector("#m-date");
  if (sydneyDateElement) {
    let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
    sydneyDateElement.innerHTML = sydneyDate;

    let sydneyTimeElement = document.querySelector("#m-time");
    let sydneyTime = moment()
      .tz("Australia/Melbourne")
      .format("h:mm:ss [<small>]A[</small>]");
    sydneyTimeElement.innerHTML = sydneyTime;
  }
  let cairoDateElement = document.querySelector("#c-date");
  if (cairoDateElement) {
    let cairoDate = moment().tz("Africa/Cairo").format("MMMM Do YYYY");
    cairoDateElement.innerHTML = cairoDate;

    let cairoTimeElement = document.querySelector("#c-time");
    let cairoTime = moment()
      .tz("Africa/Cairo")
      .format("h:mm:ss [<small>]A[</small>]");
    cairoTimeElement.innerHTML = cairoTime;
  }
  let parisDateElement = document.querySelector("#p-date");
  if (parisDateElement) {
    let parisDate = moment().tz("Europe/Paris").format("MMMM Do YYYY");
    parisDateElement.innerHTML = parisDate;

    let parisTimeElement = document.querySelector("#p-time");
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");
    parisTimeElement.innerHTML = parisTime;
  }
  let saoPauloDateElement = document.querySelector("#sp-date");
  if (saoPauloDateElement) {
    let saoPauloDate = moment().tz("America/Sao_Paulo").format("MMMM Do YYYY");
    saoPauloDateElement.innerHTML = saoPauloDate;

    let saoPauloTimeElement = document.querySelector("#sp-time");
    let saoPauloTime = moment()
      .tz("America/Sao_Paulo")
      .format("h:mm:ss [<small>]A[</small>]");
    saoPauloTimeElement.innerHTML = saoPauloTime;
  }
  let tokyoDateElement = document.querySelector("#to-date");

  if (tokyoDateElement) {
    let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
    tokyoDateElement.innerHTML = tokyoDate;

    let tokyoTimeElement = document.querySelector("#to-time");

    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");

    tokyoTimeElement.innerHTML = tokyoTime;
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date" >${cityDate}</div>
          </div>

          <div class="time" id="la-time">${cityTime}</div>
        </div>
        <a href="/">All Cities</a
      >
        `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
