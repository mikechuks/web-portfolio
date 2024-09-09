// const express = require("express");
// const app = express();
// const mongoose = require('mongoose');
// const dotenv = require("dotenv")

// dotenv.config();

// // async function main() {
// //   const uri = process.env.MONGO_URL;
// //   // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// //   try {
// //     await mongoose.connect();
// //     console.log("Connected to MongoDB");
// //   } finally {
// //     await mongoose.close();
// //   }
// // }

// // main().catch(console.error);


// const DB_URL = process.env.MONGO_URL;
// const PORT = process.env.PORT || 3000;

// mongoose.connect(DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Successfully connected to the database');
//     // Start your server here or listen on the port
//     // Example: app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//     process.exit(1);
//   });

// const conn = mongoose.connection;

// conn.once('open', () => {
//   console.log(`Successfully listening on port ${PORT}`);
// });

// conn.on('error', (err) => {
//   console.error('Database connection error:', err);
//   process.exit(1);
// });


// app.use(express.json())

// const routes = require('./sever/routes/user');
// app.use('api/user', routes);

// app.listen(process.env.PORT || 5000, ()=>{
//     console.log("Backend server is running");
// });

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

const conn = mongoose.connection;

conn.once('open', () => {
  console.log(`Successfully listening on port ${PORT}`);
});

conn.on('error', (err) => {
  console.error('Database connection error:', err);
  process.exit(1);
});

// Middleware to parse JSON requests
app.use(express.json());

// Routes
const userRoutes = require('./sever/routes/user');
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
