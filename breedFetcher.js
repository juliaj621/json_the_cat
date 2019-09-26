const request = require('request');
const argument = process.argv;
const breed = argument.slice(2);

request((`https://api.thecatapi.com/v1/breeds/search?q=${breed}`), (error, response, body) => {
  if (error) {
    console.log("Your request has resulted in an error");
    throw error;
  } else {
    const data = JSON.parse(body);
    if (typeof data[0] === "undefined") {
      console.log("Purrrinteteresting... this is not a breed. Please try another breed.");
    } else {
      console.log(data[0].description);
    }
  }
});

