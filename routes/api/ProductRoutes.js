const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  filterProduct,
} = require("../../controller/product-controller");
const { protect, admin } = require("../../middleware/authMiddleware");

router.route("/").get(getProducts).post(createProduct);
router.route("/categories").post(filterProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(protect, admin, updateProduct);

module.exports = router;
