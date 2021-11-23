const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/root.router");
const port = 3000;

app.use(cors());

// chuyển req, res sang dạng json
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});

//setup sequelize
const { sequelize } = require("./model");
sequelize.sync({ alter: true });
