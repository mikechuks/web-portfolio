const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const updateAdminController = require('../controllers/updateAdminController');
const addAdminController = require('../controllers/addAdminController');

//View
router.get('/', userController.view);
router.get('/contact', userController.contact);
router.get('/portfolio', userController.portfolio);
router.get('/admin-home', userController.admin_home);
router.get('/admin-contact', userController.admin_contact);
router.get('/admin-portfolio', userController.admin_portfolio);
router.get('/view-add-tes', userController.view_add_tes);
router.get('/view-add-portfolio', userController.view_add_port);
router.get('/view-add-skills', userController.view_add_skills);
router.get('/view-add-ex', userController.view_add_ex);
router.get('/view-update-skills/:id', userController.view_update_skills);
router.get('/view-update-ex/:id', userController.view_update_ex);
router.get('/view-update-tes/:id', userController.view_update_tes);
router.get('/view-update-header/:id', userController.view_update_header);
router.get('/view-update-portfolio/:id', userController.view_update_port);

//ADD
router.post('/add-skills', addAdminController.add_skills);
router.post('/add-ex', addAdminController.add_ex);
router.post('/add-tes', addAdminController.add_tes);
router.post('/add-portfolio', addAdminController.add_port);

//UPDATE
router.post('/update-tes', updateAdminController.update_tes);
router.post('/update-ex', updateAdminController.update_ex);
router.post('/update-skills', updateAdminController.update_skills);
router.post('/update-first-item', updateAdminController.update_first_item1);
router.post('/update-portfolio', updateAdminController.update_port);

//Send Mail
router.post('/contact-me', userController.send_email);


module.exports = router;