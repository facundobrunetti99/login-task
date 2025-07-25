import { Router } from "express"
import { authRequired } from "../middlewares/validateToken.js"
import {
    getProject,
    getProjects,
    deleteProject,
    updateProject, createProjects
} from "../controller/project.controller.js"
import { validateSchema } from "../middlewares/validate.middleware.js"
import { createProjectSchema } from "../schema/project.schema.js"
const router = Router();


router.get('/projects', authRequired, getProjects)
router.get('/project/:id', authRequired, getProject)
router.post('/projects', authRequired, validateSchema(createProjectSchema), createProjects)
router.put('/project/:id', authRequired, updateProject)
router.delete('/project/:id', authRequired, deleteProject)

export default router;
