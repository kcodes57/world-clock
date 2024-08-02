function updateTime() {
  let losAngelesDateElement = document.querySelector("#la-date");
  if (losAngelesDateElement) {
    let losAngelesDate = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losAngelesDateElement.innerHTML = losAngelesDate;

    let losAngelesTimeElement = document.querySelector("#la-time");
    let losAngelesTime = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
    losAngelesTimeElement.innerHTML = losAngelesTime;
  }
  let sydneyDateElement = document.querySelector("#s-date");
  if (sydneyDateElement) {
    let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
    sydneyDateElement.innerHTML = sydneyDate;

    let sydneyTimeElement = document.querySelector("#s-time");
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
    sydneyTimeElement.innerHTML = sydneyTime;
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
