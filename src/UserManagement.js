var _ = require('lodash');

class UserManagement {
  static isLibrarian(userManagementData, email) {
    // Simply check whether the librariansByEmail map contains the email field
    return _.has(_.get(userManagementData, "librariansByEmail"), email);
  }

  static isVipMember(userManagementData, email) {
    // When a member is a VIP member, we add a field isVIP, with the value of true to the record.
    // To check if a member is a VIP member, we check whether the isVIP field is set to true in the member record.
    return _.get(userManagementData, ["membershipByEmail", email, "isVIP"]) == true;
  }

  static isSuperMember(userManagementData, email) {
    return _.get(userManagementData, ["membershipByEmail", email, "isSuper"]) == true;
  }
}

module.exports = UserManagement;