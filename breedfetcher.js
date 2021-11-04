const request = require('request');

const fetchBreedDescription = function(breedRequest, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedRequest}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed was not found", null);
      return;
    }
    callback(null, data[0]['description']);
  });
};

module.exports = {fetchBreedDescription};