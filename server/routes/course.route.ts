import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
const courseRouter = express.Router();

courseRouter.post("/create-course",isAuthenticated,authorizeRoles("admin"),uploadCourse);
courseRouter.put("/edit-course/:id",isAuthenticated,authorizeRoles("admin"),editCourse);
courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-course",getAllCourses);
courseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);

export default courseRouter;