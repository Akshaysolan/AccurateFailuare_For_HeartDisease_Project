// server.js

const express = require('express');

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./models/db');
const Heart = require('./models/Heart')
const app = express();
const PORT = process.env.PORT || 3000;


const axios = require('axios');

const bcrypt = require('bcrypt');
const Data = require('./models/dataModels');

require('dotenv').config();


const secretKey = process.env.JWT_SECRET;
// Middleware
app.use(bodyParser.json());
app.use(cors());

// User model
const User = require('./models/user');




// Register route
app.post('/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNo,
      email,
      password,
      age,
      bloodGroup,
      gender,
      address,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      mobileNo,
      email,
      password: hashedPassword,
      age,
      bloodGroup,
      gender,
      address,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});





app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




//form
app.post('/form', async (req, res) => {
  try {
   
    const newData = new form(req.body);
    
    await newData.save();
   
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (err) {
    
    res.status(400).json({ error: err.message });
  }
});


//heart
app.post('/analysis', async (req, res) => {
  try {
   
    const newData = new Heart(req.body);
    
    await newData.save();
   
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (err) {
    
    res.status(400).json({ error: err.message });
  }
});






// Route to send data to Flask for analysis
app.post('/analysis', async (req, res) => {
  const inputData = req.body; // Assuming the request body contains the data to be analyzed

  try {
    if (!inputData || !Object.keys(inputData).length) {
      return res.status(400).json({ error: 'Missing or incomplete data' });
    }

    const heartData = new HeartModel(inputData);
    await heartData.save();
    // Send a POST request to the Flask endpoint
    const response = await axios.post('http://localhost:5000/analysis', inputData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data); // Return the response from Flask
  } catch (error) {
    console.error('Error sending data to Flask:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to send data to Flask for analysis

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
