import student from "../controller/student";
import express from "express";

const router = express.Router();

// Define your routes
router.get("/home",  student.getHome);

// Use RedirectIfAuthenticated on the login route to prevent logged-in users from accessing it
router.get(["/login", "/"],  student.getlogin);
// Change the POST route for login authentication
router.post("/loginAuth",  student.authCheck); // Ensure that authenticated users can't hit this route either

// All student-related routes require authentication
router.get("/students",  student.getAllStudents);
router.get("/student/:id",  student.getStudent);
router.get("/create-student", student.gotoForm);
router.post("/students", student.createStudent);
router.get("/students/:id/edit", student.gotoUpdateForm);
router.put("/students/:id", student.updateStudent);
router.delete("/students/:id", student.deleteStudent);

export default router;
