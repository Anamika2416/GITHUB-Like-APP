import express from 'express';
import { getLikes, getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';
import { ensureAuthenticated} from "../middleware/ensureAuthenticated.js"
const router = express.Router();

router.get("/profile/:username",getUserProfileAndRepos);
//TODO => get likes(who liked our profile)
//TODO => post like a profile
router.get("/likes",ensureAuthenticated,getLikes );
router.post("/like/:username",ensureAuthenticated, likeProfile);
export default router;