import Invoice from "../models/invoice.model";
import Joi from "@hapi/joi";
import HttpStatus from "http-status-codes";

export default {
  // *****************************************************************************************
  // Find All Invoices
  // *****************************************************************************************
  async findAllInvoices(req, res) {
    await Invoice.find({})
      .then(invoice => {
        if (!invoice)
          return res.status(HttpStatus.NOT_FOUND).json({
            err: "Aucune facture existante pour le moment - veuillez réessayer"
          });
        return res.status(HttpStatus.OK).json(invoice);
      })
      .catch(err => {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },

  // *****************************************************************************************
  // Find Invoice By Id
  // *****************************************************************************************
  async findInvoiceById(req, res) {
    const { id } = req.params;
    await Invoice.findById(id)
      .then(invoice => {
        if (!invoice)
          return res.status(HttpStatus.NOT_FOUND).json({
            err: "Impossible de trouver cette facture - veuillez réessayer"
          });
        return res.status(HttpStatus.OK).json(invoice);
      })
      .catch(err => {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },

  // *****************************************************************************************
  // Create New Invoice
  // *****************************************************************************************
  async createInvoice(req, res) {
    const schema = Joi.object().keys({
      item: Joi.string()
        .required()
        .min(5)
        .max(150),
      qty: Joi.number()
        .integer()
        .required(),
      date: Joi.date().required(),
      due: Joi.date().required(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional()
    });

    const value = schema.validateAsync(req.body);
    try {
      await Invoice.create(value).then(invoice => {
        res.status(HttpStatus.CREATED).json(invoice);
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json(err.details[0].message);
    }
  },

  // *****************************************************************************************
  // Update Invoice
  // *****************************************************************************************
  async updateInvoice(req, res) {
    const { id } = req.params;
    const schema = Joi.object().keys({
      item: Joi.string().optional(),
      qty: Joi.number()
        .integer()
        .optional(),
      date: Joi.date().optional(),
      due: Joi.date().optional(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional()
    });
    const { error, value } = schema.validate(req.body);
    if (error && error.details)
      return res.status(HttpStatus.BAD_REQUEST).json(error.details[0].message);

    await Invoice.findOneAndUpdate({ _id: id }, value, { new: true })
      .then(invoice => {
        if (!invoice) {
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "Impossible de trouver la facture à mettre à jour" });
        }
        return res
          .status(HttpStatus.OK)
          .json({ msg: "Facture mise à jour avec succès", invoice });
      })
      .catch(err => {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },

  // *****************************************************************************************
  // Delete Invoice
  // *****************************************************************************************
  async deleteInvoice(req, res) {
    const { id } = req.params;
    await Invoice.findByIdAndRemove(id)
      .then(invoice => {
        if (!invoice)
          return res
            .status(HttpStatus.NOT_FOUND)
            .json({ err: "Impossible de trouver la facture à supprimer" });
        return res
          .status(HttpStatus.OK)
          .json({ msg: "Facture supprimée avec succès" });
      })
      .catch(err => {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  }
};
