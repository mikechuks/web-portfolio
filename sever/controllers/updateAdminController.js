const mysql = require('mysql2/promise');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// const mysql = require('mysql');

//Connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    password       : process.env.DB_PASS,
    database       : process.env.DB_NAME,
})

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload 
const update_header_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('HImage'); // 'cImage' is the name attribute in the form

const update_port_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('portImg'); // 'cImage' is the name attribute in the form

const update_tes_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('tesImg'); // 'cImage' is the name attribute in the form

const update_com_upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('comImg'); // 'cImage' is the name attribute in the form


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

//update first Item
exports.update_first_item1 = [
  update_header_upload,
    body('HName').notEmpty().withMessage('Name is required'),
    body('HContent').notEmpty().withMessage('Name is required'),
    body('HButText').notEmpty().withMessage('Name is required'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('update-first-item', {layout: 'admin-layout', errors: errors.array(), id: req.body.id, skillHead: req.body.skillHead, addSkill: req.body.addSkill});
      }
  
      const {id, HName,HContent,HButText} = req.body;
  
      try {

      // Retrieve the current image path from the database
      const [currentImageResult] = await pool.query('SELECT header_image FROM header WHERE header_id = ?', [id]);
      const currentImage = currentImageResult[0].header_image;

      // If a new image is uploaded, update the image path and delete the old image
      let HImage = currentImage;
      if (req.file) {
        HImage = `uploads/${req.file.filename}`;
       // Delete the old image if it exists
       if (currentImage) {
        const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(currentImage));
        console.log('Old Image Path:', oldImagePath);

        if (fs.existsSync(oldImagePath)) {
          fs.unlink(oldImagePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted successfully');
            }
          });
        } else {
          console.error('Old image does not exist at path:', oldImagePath);
        }
      }
    }

        const query ='UPDATE header SET header_name = ?, header_content = ?, header_image = ?, header_btn_text = ? WHERE header_id = ?';
        const [results] = await pool.execute(query, [HName,HContent,HImage,HButText,id]);

        // Fetch the updated row to confirm the update or display updated data
        const [rows] = await pool.execute('SELECT * FROM header WHERE header_id = ?', [id]);


        res.render('update-first-item',{layout:'admin-layout', rows});
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  ]

//Update Skills
exports.update_skills = [
    body('skillHead').notEmpty().withMessage('Name is required'),
    body('addSkill').notEmpty().withMessage('Name is required'),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('update-skills', {layout: 'admin-layout', errors: errors.array(), id: req.body.id, skillHead: req.body.skillHead, addSkill: req.body.addSkill});
      }
  
      const {id, skillHead,addSkill} = req.body;
  
      try {
        const query ='UPDATE skill SET skill_header = ?, skill_list = ? WHERE skill_id = ?';
        const [results] = await pool.execute(query, [skillHead,addSkill,id]);

         // Fetch the updated row to confirm the update or display updated data
        const [rows] = await pool.execute('SELECT * FROM skill WHERE skill_id = ?', [id]);

        res.render('update-skills',{layout:'admin-layout', rows});
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
      }
    }
  ]

//Update Experience
exports.update_ex = [
  update_com_upload,
  body('comName').notEmpty().withMessage('Name is required'),
  body('exDetails').notEmpty().withMessage('Name is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('update-experience', {layout: 'admin-layout', errors: errors.array(), id: req.body.id, comName: req.body.comName, comImg: req.body.comImg, exDetails: req.body.exDetails});
    }

    const {id,comName,exDetails} = req.body;

    try {
            // Retrieve the current image path from the database
            const [currentImageResult] = await pool.query('SELECT company_image FROM pro_experience WHERE experience_id = ?', [id]);
            const currentImage = currentImageResult[0].company_image;
      
            // If a new image is uploaded, update the image path and delete the old image
            let comImg = currentImage;
            if (req.file) {
              comImg = `uploads/${req.file.filename}`;
             // Delete the old image if it exists
             if (currentImage) {
              const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(currentImage));
              console.log('Old Image Path:', oldImagePath);
      
              if (fs.existsSync(oldImagePath)) {
                fs.unlink(oldImagePath, (err) => {
                  if (err) {
                    console.error('Error deleting old image:', err);
                  } else {
                    console.log('Old image deleted successfully');
                  }
                });
              } else {
                console.error('Old image does not exist at path:', oldImagePath);
              }
            }
          }

      const query ='UPDATE pro_experience SET company_name = ?, company_image = ?, experience_details = ? WHERE experience_id = ?';
      const [results] = await pool.execute(query, [comName,comImg,exDetails,id]);

       // Fetch the updated row to confirm the update or display updated data
      const [rows] = await pool.execute('SELECT * FROM pro_experience WHERE experience_id = ?', [id]);

      res.render('update-experience',{layout:'admin-layout', rows});
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).send('Internal Server Error');
    }
  }
]

//Update Testimonies
exports.update_tes = [
  update_tes_upload,
  body('tesHead').notEmpty().withMessage('Name is required'),
  body('tesDel').notEmpty().withMessage('Name is required'),
  body('tesName').notEmpty().withMessage('Name is required'),
  body('tesPro').notEmpty().withMessage('Name is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('update-testimonies', {layout: 'admin-layout', errors: errors.array(), id: req.body.id, tesHead: req.body.tesHead, tesDel: req.body.tesDel, tesImg: req.body.tesImg, tesName: req.body.tesName, tesPro: req.body.tesPro});
    }

    const {id, tesHead, tesDel, tesName, tesPro} = req.body;

    try {
                 // Retrieve the current image path from the database
                 const [currentImageResult] = await pool.query('SELECT testimony_image FROM testimony WHERE testimony_id = ?', [id]);
                 const currentImage = currentImageResult[0].testimony_image;
           
                 // If a new image is uploaded, update the image path and delete the old image
                 let tesImg = currentImage;
                 if (req.file) {
                   tesImg = `uploads/${req.file.filename}`;
                  // Delete the old image if it exists
                  if (currentImage) {
                   const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(currentImage));
                   console.log('Old Image Path:', oldImagePath);
           
                   if (fs.existsSync(oldImagePath)) {
                     fs.unlink(oldImagePath, (err) => {
                       if (err) {
                         console.error('Error deleting old image:', err);
                       } else {
                         console.log('Old image deleted successfully');
                       }
                     });
                   } else {
                     console.error('Old image does not exist at path:', oldImagePath);
                   }
                 }
               }

      const query ='UPDATE testimony SET testimony_header = ?, testimony_details = ?, testimony_image = ?, testimony_name = ?,testimony_proffession = ? WHERE testimony_id = ?';
      const [results] = await pool.execute(query, [tesHead, tesDel, tesImg, tesName, tesPro, id]);

       // Fetch the updated row to confirm the update or display updated data
      const [rows] = await pool.execute('SELECT * FROM testimony WHERE testimony_id = ?', [id]);

      res.render('update-testimonies',{layout:'admin-layout', rows});
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).send('Internal Server Error');
    }
  }
]

//Update Portfolio
exports.update_port = [
  update_port_upload,
  body('portTitle').notEmpty().withMessage('Name is required'),
  body('portTes').notEmpty().withMessage('Name is required'),
  body('portImgDes').notEmpty().withMessage('Name is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('update-portfolio', {layout: 'admin-layout', errors: errors.array(), id: req.body.id, portTitle: req.body.portTitle, portTes: req.body.portTes, portImg: req. body.portImg, portImgDes: req. body.portImgDes});
    }

    const {id, portTitle, portTes, portImgDes, } = req.body;

    try {
            // Retrieve the current image path from the database
            const [currentImageResult] = await pool.query('SELECT port_img FROM portfolio WHERE port_id = ?', [id]);
            const currentImage = currentImageResult[0].port_img;
      
            // If a new image is uploaded, update the image path and delete the old image
            let portImg = currentImage;
            if (req.file) {
              portImg = `uploads/${req.file.filename}`;
             // Delete the old image if it exists
             if (currentImage) {
              const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(currentImage));
              console.log('Old Image Path:', oldImagePath);
      
              if (fs.existsSync(oldImagePath)) {
                fs.unlink(oldImagePath, (err) => {
                  if (err) {
                    console.error('Error deleting old image:', err);
                  } else {
                    console.log('Old image deleted successfully');
                  }
                });
              } else {
                console.error('Old image does not exist at path:', oldImagePath);
              }
            }
          }

      const query ='UPDATE portfolio SET port_title = ?, port_text = ?, port_img = ?, port_img_des = ? WHERE port_id = ?';
      const [results] = await pool.execute(query, [portTitle, portTes, portImg, portImgDes, id]);

       // Fetch the updated row to confirm the update or display updated data
      const [rows] = await pool.execute('SELECT * FROM portfolio WHERE port_id = ?', [id]);

      res.render('update-portfolio',{layout:'admin-layout', rows});
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).send('Internal Server Error');
    }
  }
]