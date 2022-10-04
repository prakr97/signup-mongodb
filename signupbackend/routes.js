const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("./SignUpModels");

router.post("/signup", (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    fullname: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .create()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
