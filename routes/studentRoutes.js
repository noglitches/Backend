const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');
const auth = require('../middleware/auth');

// Student routes
router.post('/students', auth, StudentController.createStudent); // Create a new student
router.get('/students', auth, StudentController.getAllStudents); // Get all students
router.get('/students/:id', auth, StudentController.getStudentById); // Get student by ID
router.patch('/students/:id', auth, StudentController.updateStudent); // Update student by ID
router.delete('/students/:id', auth, StudentController.deleteStudent); // Delete student by ID

module.exports = router;