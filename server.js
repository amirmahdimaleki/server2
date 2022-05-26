const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const todo = require("./routes/router");
const cors = require("cors");

const app = express();
dotenv.config();






app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get("/", (req, res) => {
  res.send("Todo api");
});

app.use("/todo", todo);





const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
