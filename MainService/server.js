//import module
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//import route
const academicServices = require("./routes/academic_services");

//server config
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/academicservices", academicServices);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
