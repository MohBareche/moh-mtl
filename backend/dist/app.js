"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require("../src/config/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 3000;

// Connection to database
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://localhost/invoice-builder", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middlewares
app.use((0, _morgan2.default)("dev"));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));

// Routes
app.use("/api", _routes.router);

// Start Server
app.listen(PORT, function () {
  console.log("Server is running at http://localhost:" + PORT);
});
//# sourceMappingURL=app.js.map