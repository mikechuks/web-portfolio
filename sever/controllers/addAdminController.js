const mysql = require('mysql2/promise');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
// const mysql = require('mysql');

//Connection Pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    password       : process.env.DB_PASS,
    database       : process.env.DB_NAME,
})

// Set storage engine
const storage = multer.diskStorage({
  destination: 'public/images/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const add_ex_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('cImage'); // 'cImage' is the name attribute in the form

const add_tes_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('tesImg'); // 'cImage' is the name attribute in the form

const add_port_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('CImage'); // 'cImage' is the name attribute in the form


// Check file type
function checkFileType(file, cb) {
  // Allowed file extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}





//Add Skills
exports.add_skills = [
    body('skillHead').notEmpty().withMessage('Name is required'),
    body('addSkill').notEmpty().withMessage('Name is required'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('add-skills',{layout:'admin-layout', errors: errors.array()});
      }
  
      const {skillHead,addSkill} = req.body;
  
      try {
        const query = 'INSERT INTO skill (skill_header,skill_list) VALUES (?, ?)';
        const [results] = await pool.execute(query, [skillHead,addSkill]);
        res.render('add-skills',{layout:'admin-layout'});
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  ]

//Add Experience
exports.add_ex = [
  // Multer middleware for handling file upload
  add_ex_upload,
  
  // Validation logic
    body('cName').notEmpty().withMessage('Name is required'),
    body('exDetails').notEmpty().withMessage('Email is invalid'),

    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('add-experience', {layout:'admin-layout', errors: errors.array()});
      }
  
      const {cName, exDetails,} = req.body;

    // Check if the file is uploaded
    if (!req.file) {
      return res.render('add-experience', {layout:'admin-layout', msg: 'Company image is required' });
    }

    const cImage = `images/${req.file.filename}`
  
      try {
        const query = 'INSERT INTO pro_experience(company_name, company_image, experience_details) VALUES (?, ?, ?)';
        const [results] = await pool.execute(query, [cName, exDetails, cImage]);
        res.render('add-experience',{layout:'admin-layout'});
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  ]

// Add Testimonies
exports.add_tes =[
    // Multer middleware for handling file upload
    add_tes_upload,

    body('tesHead').notEmpty().withMessage('Name is required'),
    body('tesDetail').notEmpty().withMessage('Email is invalid'),
    body('tesName').notEmpty().withMessage('Email is invalid'),
    body('tesProffession').notEmpty().withMessage('Name is required'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('add-testimonies', {layout:'admin-layout',errors: errors.array()});
      }
  
      const {tesHead, tesDetail, tesName, tesProffession} = req.body;

    // Check if the file is uploaded
    if (!req.file) {
      return res.render('add-testimonies', {layout:'admin-layout', msg: 'Testimony image is required' });
    }

    const tesImg = `images/${req.file.filename}`
  
      try {
        const query = 'INSERT INTO testimony (testimony_header, testimony_details, testimony_image, testimony_name, testimony_proffession) VALUES (?, ?, ?, ?, ?)';
        const [results] = await pool.execute(query, [tesHead, tesDetail, tesImg, tesName, tesProffession]);
        res.render('add-testimonies',{layout:'admin-layout'});
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  ]

//Add Portfolio
exports.add_port = [
    // Multer middleware for handling file upload
    add_port_upload,

    body('HTitle').notEmpty().withMessage('Name is required'),
    body('HText').notEmpty().withMessage('Email is invalid'),
    body('ImgDes').notEmpty().withMessage('Email is invalid'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('add-portfolio', {layout:'admin-layout', errors: errors.array()});
      }
  
      const {HTitle, HText, ImgDes} = req.body;

          // Check if the file is uploaded
    if (!req.file) {
      return res.render('add-portfolio', {layout:'admin-layout', msg: 'portfolio image is required' });
    }

    const CImage = `images/${req.file.filename}`
  
      try {
        const query = 'INSERT INTO portfolio (port_title, port_text, port_img, port_img_des) VALUES (?, ?, ?, ?)';
        const [results] = await pool.execute(query, [HTitle, HText, CImage, ImgDes]);
        res.render('add-portfolio',{layout:'admin-layout'});
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  ]