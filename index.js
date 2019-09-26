const { fetchBreedDescription } = require('./breedFetcher');

const argument = process.argv;
const breed = argument.slice(2);

fetchBreedDescription(breed, (desc, error) => {
  console.log(error);
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});