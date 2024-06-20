const mysql = require('mysql2/promise');
// const { body, validationResult } = require('express-validator');
// const mysql2 = require('mysql2');

//Connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    password       : process.env.DB_PASS,
    database       : process.env.DB_NAME,
})

//Views Users
exports.view = async (req, res) => {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected as ID ' + connection.threadId);

    // Execute the query
    const [row1] = await connection.query('SELECT * FROM header WHERE header_id = ?', [1]);

    const [row2] = await connection.query('SELECT * FROM skill ');

    const [row3] = await connection.query('SELECT * FROM pro_experience');

    const [row4] = await connection.query('SELECT * FROM testimony');

    // Render the view with the fetched data
    res.render('home', { layout: 'client-layout', row1: row1[0], row2, row3, row4 });
  } catch (err) {
    // Handle errors
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

//Contact
exports.contact = async (req, res) => {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected as ID ' + connection.threadId);

    // Execute the query
    const [row] = await connection.query('SELECT * FROM header WHERE header_id = ?', [req.params.id]);

    // Render the view with the fetched data
    res.render('contact', { layout: 'client-layout', row });
  } catch (err) {
    // Handle errors
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

//Portfolio
exports.portfolio = async (req, res) => {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected as ID ' + connection.threadId);

    // Execute the query
    const [rows] = await connection.query('SELECT * FROM portfolio');

    // Render the view with the fetched data
    res.render('portfolio', { layout: 'client-layout', rows });
  } catch (err) {
    // Handle errors
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

//Admin Home
exports.admin_home = async (req, res) => {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected as ID ' + connection.threadId);

    // Execute the query
    const [row1] = await connection.query('SELECT * FROM header WHERE header_id = ?', [1]);

    const [row2] = await connection.query('SELECT * FROM skill ');

    const [row3] = await connection.query('SELECT * FROM pro_experience');

    const [row4] = await connection.query('SELECT * FROM testimony');

    // Render the view with the fetched data
    res.render('admin-home', { layout: 'admin-client-layout', row1: row1[0], row2, row3, row4 });
  } catch (err) {
    // Handle errors
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

//Admin Contact
exports.admin_contact = async (req, res) => {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected as ID ' + connection.threadId);

    // Execute the query
    const [rows] = await connection.query('SELECT * FROM skill WHERE skill_id = ?', [req.params.id]);

    // Render the view with the fetched data
    res.render('admin-contact', { layout: 'admin-client-layout', rows });
  } catch (err) {
    // Handle errors
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

//Admin Portfolio
exports.admin_portfolio = async (req, res) => {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected as ID ' + connection.threadId);

    // Execute the query
    const [rows] = await connection.query('SELECT * FROM portfolio');

    // Render the view with the fetched data
    res.render('admin-portfolio', { layout: 'admin-client-layout', rows });
  } catch (err) {
    // Handle errors
    console.error('Error fetching data:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    // Ensure the connection is released back to the pool
    if (connection) connection.release();
  }
};

//Views Add Testimony
exports.view_add_tes = (req, res) => {
    res.render('add-testimonies',{layout:'admin-layout'});
}

//View Add Portfolio
exports.view_add_port = (req, res) => {
    res.render('add-portfolio',{layout:'admin-layout'});
}

//View Skill
exports.view_add_skills = (req, res) => {
    res.render('add-skills',{layout:'admin-layout'});
}

//View Experience
exports.view_add_ex = (req, res) => {
    res.render('add-experience',{layout:'admin-layout'});
}

//Edit Skills
exports.view_update_skills = async (req, res) => {
    let connection;
  
    try {
      // Get a connection from the pool
      connection = await pool.getConnection();
      console.log('Connected as ID ' + connection.threadId);
  
      // Execute the query
      const [rows] = await connection.query('SELECT * FROM skill WHERE skill_id = ?', [req.params.id]);
  
      // Render the view with the fetched data
      res.render('update-skills', { layout: 'admin-layout', rows });
    } catch (err) {
      // Handle errors
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } finally {
      // Ensure the connection is released back to the pool
      if (connection) connection.release();
    }
  };

  //Edit experience
exports.view_update_ex = async (req, res) => {
    let connection;
  
    try {
      // Get a connection from the pool
      connection = await pool.getConnection();
      console.log('Connected as ID ' + connection.threadId);
  
      // Execute the query
      const [rows] = await connection.query('SELECT * FROM pro_experience WHERE experience_id = ?', [req.params.id]);
  
      // Render the view with the fetched data
      res.render('update-experience', { layout: 'admin-layout', rows });
    } catch (err) {
      // Handle errors
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } finally {
      // Ensure the connection is released back to the pool
      if (connection) connection.release();
    }
  };

//Edit Testimony
exports.view_update_tes = async (req, res) => {
    let connection;
  
    try {
      // Get a connection from the pool
      connection = await pool.getConnection();
      console.log('Connected as ID ' + connection.threadId);
  
      // Execute the query
      const [rows] = await connection.query('SELECT * FROM testimony WHERE testimony_id = ?', [req.params.id]);
  
      // Render the view with the fetched data
      res.render('update-testimonies', { layout: 'admin-layout', rows });
    } catch (err) {
      // Handle errors
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } finally {
      // Ensure the connection is released back to the pool
      if (connection) connection.release();
    }
  };

//Edit Header
exports.view_update_header = async (req, res) => {
    let connection;
  
    try {
      // Get a connection from the pool
      connection = await pool.getConnection();
      console.log('Connected as ID ' + connection.threadId);
  
      // Execute the query
      const [rows] = await connection.query('SELECT * FROM header WHERE header_id = ?', [req.params.id]);
  
      // Render the view with the fetched data
      res.render('update-first-item', { layout: 'admin-layout', rows });
    } catch (err) {
      // Handle errors
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } finally {
      // Ensure the connection is released back to the pool
      if (connection) connection.release();
    }
  };

//Edit Portfolio
exports.view_update_port = async (req, res) => {
    let connection;
  
    try {
      // Get a connection from the pool
      connection = await pool.getConnection();
      console.log('Connected as ID ' + connection.threadId);
  
      // Execute the query
      const [rows] = await connection.query('SELECT * FROM portfolio WHERE port_id = ?', [req.params.id]);
  
      // Render the view with the fetched data
      res.render('update-portfolio', { layout: 'admin-layout', rows });
    } catch (err) {
      // Handle errors
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
    } finally {
      // Ensure the connection is released back to the pool
      if (connection) connection.release();
    }
  };