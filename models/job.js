const Job = function (userID, description, status) {
    this.userID = userID;
    this.description = description;
    this.status = status;
}

module.exports = Job;