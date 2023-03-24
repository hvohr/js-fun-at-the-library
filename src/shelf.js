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

function listTitles(shelf) {
  var array = []
  for (var i = 0; i < shelf.length; i++) {
    array.push(shelf[i].title)
    }
    return array.join(', ')
   };

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};