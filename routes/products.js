const express = require('express');
const router = express.Router()
const products = require("../data/products");



router.get("/products", (request, response) => {
  return response.json(products);
})
router.post("/products", (request, response) => {

})
router.put("/products", (request, response) => {

})
router.delete("/products", (request, response) => {
  
})

module.exports = router;
