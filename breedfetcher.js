const request = require('request');

const args = process.argv;
const breedRequest = args.slice(2);
const catBreed = breedRequest[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed was not found");
    return;
  }
  console.log(data[0]['description']);
});