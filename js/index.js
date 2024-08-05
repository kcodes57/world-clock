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
  let melbourneDateElement = document.querySelector("#m-date");
  if (melbourneDateElement) {
    let melbourneDate = moment()
      .tz("Australia/Melbourne")
      .format("MMMM Do YYYY");
    melbourneDateElement.innerHTML = melbourneDate;

    let melbourneTimeElement = document.querySelector("#m-time");
    let melbourneTime = moment()
      .tz("Australia/Melbourne")
      .format("h:mm:ss [<small>]A[</small>]");
    melbourneTimeElement.innerHTML = melbourneTime;
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
