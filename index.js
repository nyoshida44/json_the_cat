const {fetchBreedDescription} = require('./breedfetcher');

const args = process.argv;
const breedInput = args.slice(2);
const breedName = breedInput[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});