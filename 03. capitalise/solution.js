function capitalise(word) {
  // return word[0].toUpperCase();
  return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = { capitalise };
