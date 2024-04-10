const UserService = require ("./service");

const UserService = new UserService();


function createUser(req, res) {
    const response = userService.createUser();

    return res.send(response);

}

module.export = {
    createUser,

}