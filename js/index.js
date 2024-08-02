function updateTime() {
  let losAngelesDateElement = document.querySelector("#la-date");
  let losAngelesDate = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesDateElement.innerHTML = losAngelesDate;

  let losAngelesTimeElement = document.querySelector("#la-time");
  let losAngelesTime = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  losAngelesTimeElement.innerHTML = losAngelesTime;

  let sydneyDateElement = document.querySelector("#s-date");
  let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
  sydneyDateElement.innerHTML = sydneyDate;

  let sydneyTimeElement = document.querySelector("#s-time");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
  sydneyTimeElement.innerHTML = sydneyTime;
}

updateTime();
setInterval(updateTime, 1000);
