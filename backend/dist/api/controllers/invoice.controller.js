"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("../models/invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _joi = require("@hapi/joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var invoices = [{ _id: 1, item: "moh", qty: 10, date: new Date() }, { _id: 2, item: "moha", qty: 8, date: new Date() }, { _id: 3, item: "moham", qty: 11, date: new Date() }, { _id: 4, item: "mohame", qty: 15, date: new Date() }, { _id: 5, item: "mohamed", qty: 12, date: new Date() }];

exports.default = {
  findAll: function findAll(req, res, next) {
    res.json(invoices);
  },
  create: function create(req, res) {
    var schema = _joi2.default.object({
      item: _joi2.default.string().alphanum().min(5).max(150).required(),
      qty: _joi2.default.number().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _schema$validateAsync = schema.validateAsync(req.body, schema),
        error = _schema$validateAsync.error,
        value = _schema$validateAsync.value;

    if (error && error.details) return res.status(400).json(error);

    _invoice2.default.create(value).then(function (invoice) {
      res.status(201).json(invoice);
    }).catch(function (err) {
      return res.status(500).json(err);
    });
  }
};
//# sourceMappingURL=invoice.controller.js.map