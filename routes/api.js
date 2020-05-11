const router = require("express").Router();
const bookController = require("../controllers/bookController");

router
  .route("/books")
  .get(bookController.findAll)
  .post(bookController.create);

router
  .route("/books/:id")
  .delete(bookController.remove);

module.exports = router;
