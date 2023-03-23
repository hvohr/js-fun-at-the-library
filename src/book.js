function createTitle(title) {
  var bookIdea = "The " + title
  return bookIdea;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
};

function saveReview(review, array) {
  if (!array.includes(review)) {
    console.log(array.push(review))
  }
};

function calculatePageCount(bookTitle) {
  var PageCount = bookTitle.length * 20
  return PageCount;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}