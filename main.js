"use strict";

const path    = require("path");
const menubar = require("menubar");

const mb = menubar({
  icon: path.join(__dirname, "./icon.png"),
  width: 400,
  height: 600,
  preloadWindow: true,
});

mb.on("ready", () => {
  console.log("app is ready");
});
