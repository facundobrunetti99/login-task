import Router from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { getStory,getStories,updateStory,deleteStory,createStory } from "../controller/story.controller.js"
import { validateSchema } from "../middlewares/validate.middleware.js"
import { createStorySchema } from "../schema/story.schema.js"

const router= Router();

router.get('/stories',authRequired,getStories)
router.get('/stoty/:id',authRequired,getStory)
router.post('/story',authRequired,validateSchema(createStorySchema),createStory)
router.put('/story/:id',authRequired,updateStory)
router.delete('/story/:id',authRequired,deleteStory)