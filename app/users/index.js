// const UserService = require('./service'); // Import UserService class

// const userService = new UserService(); // Instantiate UserService

// function createUser() {
//     userService.createUser(); // Call createUser method from userService object
// }

// module.exports = {
//     createUser,
// };

const userController = require("./controller");

const rouer = express.Router();

router.post("/user", userController.createUser);

module.exports = router;
