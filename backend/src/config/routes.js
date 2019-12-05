import express from "express";
import invoiceController from "../api/controllers/invoice.controller";

export const router = express.Router();

// Invoives
router.get("/invoices", invoiceController.findAllInvoices);
router.get("/invoices/:id", invoiceController.findInvoiceById);
router.post("/invoices", invoiceController.createInvoice);
router.put("/invoices/:id", invoiceController.updateInvoice);
router.delete("/invoices/:id", invoiceController.deleteInvoice);
