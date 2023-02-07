const https = require("https");

let username = "stevengf14";

let CHROME_USER_AGENT =
  "https://www.useragentstring.com/Chrome40.0.2214.93_id_19917.php";

let options = {
  host: "api.github.com",
  path: "/users/" + username,
  method: "GET",
  headers: { "user-agent": CHROME_USER_AGENT },
};

let request = https.request(options, (response) => {
  let body = "";
  response.on("data", (out) => {
    body += out;
  });
  response.on("end", (out) => {
    let json = JSON.parse(body);
    console.log(json);
    console.log(json.blog);
  });
});

request.on("error", (e) => {
  console.log(e);
});

request.end;
