function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    return shelf.unshift(book)
  }
};


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};