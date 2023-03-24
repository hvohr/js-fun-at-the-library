function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    return shelf.unshift(book)
  }
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return shelf.splice(i, 1)
  }
}
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};