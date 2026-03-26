const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// @desc    Store contact message and send email
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Store in DB
    const contact = await Contact.create({ name, email, subject, message });

    // 2. Send email notification
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Contact: ${subject}`,
      text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Note: We use try-catch for email sending but don't want to fail the DB storage if email fails
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Still return 201 because the message was stored in the DB
    }

    res.status(201).json({
      success: true,
      message: 'Contact message received and stored.',
      contact
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
const getContacts = async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.json(contacts);
};

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    await contact.deleteOne();
    res.json({ message: 'Message removed' });
  } else {
    res.status(404).json({ message: 'Message not found' });
  }
};

module.exports = { createContact, getContacts, deleteContact };
