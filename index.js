const express = require("express");

const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const blogRouter = require("./routes/blog");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hallo Sequelize Migrations"));

app.use("/admin", adminRouter);
app.use("/blog", blogRouter);

app.listen(PORT, () =>
    console.log(`srever running on http:/localhost:${PORT}`)
);
