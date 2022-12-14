var _ = require('lodash');
const Catalog = require('./Catalog')

class Library {
  static addBookItem(libraryData, userId, bookItemInfo) {
    if(UserManagement.isLibrarian(libraryData.userManagement, userId) ||
       UserManagement.isVipMember(libraryData.userManagement, userId)) {
        return Catalog.addBookItem(libraryData.catalog, bookItemInfo);
    } else {
    throw "Not allowed to add a book item";
    }
  }

  static getBookLendings(libraryData, userId, memberId) {
    if(UserManagement.isLibrarian(libraryData.userManagement, userId) ||
       UserManagement.isSuperMember(libraryData.userManagement, userId)) {
        return Catalog.getBookLendings(libraryData.catalog, memberId);
    } else {
    throw "Not allowed to get book lendings";
    }
  }

  static searchBooksByTitleJSON(libraryData, query) {
    var results = Catalog.searchBooksByTitle(_.get(libraryData, "catalog"), query);
    var resultsJSON = JSON.stringify(results);
    return resultsJSON;
  }
}

module.exports = Library;