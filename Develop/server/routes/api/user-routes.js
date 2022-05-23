const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/')
  .post(createUser) // mutation
  .put(authMiddleware, saveBook); // mutation

router.route('/login')
  .post(login); // not sure yet, almost feels like a query? because we are just looking for that user?
  // turns out this is a mutation

router.route('/me')
  .get(authMiddleware, getSingleUser); // query
  // made the mistake of thinking this explanation would fit for login, but it fits better for getSingleUser:
  // would it be something like User.findOne ...? so a query
  // using this in a typedefs query: "user(userId: ID!): User"
  
  // users: [User]!
  // something like that wont get used because im not ever asking for a list of users

router.route('/books/:bookId')
  .delete(authMiddleware, deleteBook); // mutation

module.exports = router;
