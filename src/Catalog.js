var _ = require('lodash');

class Catalog {
  static addBookItem(catalogData, memberId) {
    // will be implemented later
  }

  static getBookLendings(catalogData, memberId) {
    // will be implemented later
  }

  static authorNames(catalogData, book) {
    var authorIds = _.get(book, "authorIds");
    var names = _.map(authorIds, function(authorId) {
      return _.get(catalogData, ["authorsById", authorId, "name"]);
    });
    return names;
  }

  // Converts a book record into a BookInfo record
  static bookInfo(catalogData, book) {
    var bookInfo = {
      "title": _.get(book, "title"),
      "isbn": _.get(book, "isbn"),
      "authorNames": Catalog.authorNames(catalogData, book)
    };
    return bookInfo;
  }

  static searchBooksByTitle(catalogData, query) {
    var allBooks = _.values(_.get(catalogData, "booksByIsbn"));
    var matchingBooks = _.filter(allBooks, function(book) {
      return _.get(book, "title").includes(query);
    });

    var bookInfos = _.map(matchingBooks, function(book) {
      return Catalog.bookInfo(catalogData, book);
    });
    return bookInfos;
  }
}

module.exports = Catalog;