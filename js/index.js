let losAngelesDateElement = document.querySelector("#la-date");
let losAngelesDate = moment()
  .tz("America / Los_Angeles")
  .format("MMMM Do YYYY");
losAngelesDateElement.innerHTML = losAngelesDate;

let sydneyDateElement = document.querySelector("#s-date");
let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
sydneyDateElement.innerHTML = sydneyDate;
