const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use(express.static(path.join(__dirname, "client/build")));

mongoose.connect(
  "mongodb+srv://root:Ps76K7h9mhmtEDJN@cluster0.791jf.gcp.mongodb.net/test?retryWrites=true&w=majority",
  {
    poolSize: 10,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connected!");
    } else {
      console.log("error: " + err);
    }
  }
);

const articlesRouter = require("./routes/articles");

const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

app.use("/articles", articlesRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
//app.get("*", function (req, res) {
//  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//});
// Email Subscription
app.post("/suscripcion", async (req, res) => {
  const dataUsuario = req.body.email;
  const { firstName, lastName, email } = req.body;
  const listID = "f42a43e46b";
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const postData = JSON.stringify(data);

  if (!firstName || !lastName || !email) {
    res.send(err);
  } else {
    const client = axios.create({
      auth: {
        username: "ketoparatubolsillo@gmail.com", //This could be your email
        password: process.env.MAILCHIMP_KEY,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const url = `https://us8.api.mailchimp.com/3.0/lists/${listID}/members/`;
    const mailChimpRes = await client.post(url, {
      email_address: `${email}`,
      status: "subscribed",
      merge_fields: {
        FNAME: `${firstName}`,
        LNAME: `${lastName}`,
      },
    });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
