const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const productRoutes = require("./routes/products");
const commentRoutes = require("./routes/comments");
const vehicleRoutes = require("./routes/vehicle");
const contactRoutes = require("./routes/contacts");

const port = process.env.PORT || 4001;

// app.use(express.static('public'))


// routes we use
app.use(productRoutes);
app.use(commentRoutes);
app.use(vehicleRoutes);
app.use(contactRoutes);

app.get("/products", (request, response) => {

})
app.post("/products", (request, response) => {

})
app.put("/products", (request, response) => {

})
app.delete("/products", (request, response) => {

})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
