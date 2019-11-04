const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

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
