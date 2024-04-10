const UserService = require("./service");
const userService = new UserService();

function createUser(req, res) {
    const response = userService.createUser();
    return res.send(response);
}

module.exports = {
    createUser,
};
