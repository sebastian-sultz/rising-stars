const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  gname: { type: String, required: true },
  gmail: { type: String, required: true },
  cname: { type: String, required: true },
  cage: { type: String }, // Optional field
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// API Route to Handle Appointment Submission with Validation
app.post(
  '/api/appointments',
  [
    body('gname').notEmpty().withMessage('Guardian Name is required'),
    body('gmail').isEmail().withMessage('Please provide a valid email address'),
    body('cname').notEmpty().withMessage('Child Name is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { gname, gmail, cname, cage, message } = req.body;
      const appointment = new Appointment({ gname, gmail, cname, cage, message });
      await appointment.save();
      res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
      console.error('Error saving appointment:', error);
      res.status(500).json({ message: 'Failed to book appointment' });
    }
  }
);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));