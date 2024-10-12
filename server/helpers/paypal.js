const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXXO2dNiTBs7TD7NbkQyaivP1wnsy05qIsx225P2kjOVHtzfqCrcyezMv70ot7MBkYqWl_U5WHw3ot2A",
  client_secret: "EPHVn_W-3Af2IzX0mqDivu3zTEy-xZqU1Hi5P7LmgekmRkEY9WolxEwdGB_IzBtG3UQ-fVm_sARXj0bh",
});

module.exports = paypal;
