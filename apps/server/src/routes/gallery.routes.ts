import Router from "express";
import galleryController from "../controllers/gallery.controller";

const router = Router();

router.post("/gallery", galleryController.addItem);

export default router;
