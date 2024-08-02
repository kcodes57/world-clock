let losAngelesDateElement = document.querySelector("#la-date");
let losAngelesDate = moment().format("MMMM Do YYYY");
losAngelesDateElement.innerHTML = losAngelesDate;

let sydneyDateElement = document.querySelector("#s-date");
let sydneyDate = moment().format("MMMM Do YYYY");
sydneyDateElement.innerHTML = sydneyDate;
