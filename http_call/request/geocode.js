const request = require("request");
const argv = require("yargs").argv;

let address = argv.address;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

request(
  {
    url: url,
    json: true,
  },
  (error, response, body) => {
    if (error) {
      console.log("Service error");
    } else if (body.status === "ZERO_RESULTS") {
      console.log("No data");
    } else if (body.status === "OK") {
      console.log(JSON.stringify(body, undefined, 1));
      console.log(JSON.stringify(body.results[0].formatted_address));
      console.log(JSON.stringify(body.results[0].geometry.location.lat));
      console.log(JSON.stringify(body.results[0].geometry.location.lng));
    } else if (body.status === "REQUEST_DENIED") {
      console.log(
        "You must use an API key to authenticate each request to Google Maps Platform APIs."
      );
    }
  }
);
