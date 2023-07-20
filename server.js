const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001; // You can use any available port number

app.use(cors());
app.use(express.json());

// Dummy storage to store invoice data (Replace this with a proper database in a real scenario)
const invoices = [];

// API endpoint to add an invoice
app.post('/api/add_invoice', (req, res) => {
  try {
    const { invoicedate, invoicenumber, invoiceamount } = req.body;

    // Perform any desired validation on the parameters
    if (!invoicedate || !invoicenumber || !invoiceamount) {
      return res.status(400).json({ error: 'All parameters are required' });
    }

    // Save the invoice data (For demonstration purposes, we store it in memory)
    invoices.push({
      invoicedate,
      invoicenumber,
      invoiceamount,
    });

    return res.status(200).json({ message: 'Invoice added successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
