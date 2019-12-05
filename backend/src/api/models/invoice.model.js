import mongoose from "mongoose";
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  item: {
    type: String,
    unique: true,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due: {
    type: Date,
    required: true
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});

export default mongoose.model("Invoice", InvoiceSchema);
