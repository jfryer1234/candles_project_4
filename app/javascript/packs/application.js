// PACKAGES
import React from "react";
import { render } from "react-dom";
import App from "../components/App";

// EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.querySelector("#root"));
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
