function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
};

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};

function checkoutBook(library, bookTitle, bookGenre) {
  var bookExist = false; // 
  for (var i = 0; i < library.shelves[bookGenre].length; i++) {
    if (library.shelves[bookGenre][i].title === bookTitle)
    library.shelves[bookGenre].splice(i, 1);
    bookExist = true;
  }
if (bookExist === true) {
  return `You have now checked out ${bookTitle} from the ${library.name}.`
} else {
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
}
}

function takeStock(library, genre) {
  if (!genre) {
    return `There are a total of ${Object.values(library.shelves).length} books at the ${library.name}.`
  } else {
    return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};