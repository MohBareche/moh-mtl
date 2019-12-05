"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("../api/controllers/invoice.controller");

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

// Invoives
router.get("/invoices", _invoice2.default.findAll);
router.post("/invoices", _invoice2.default.create);
//# sourceMappingURL=routes.js.map