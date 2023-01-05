import { Request, Response } from "express";
import { db } from "../db/db";
import { IGalleryItem } from "../db/models/gallery.models";

class GalleryController {
  async addItem(req: Request<{}, {}, IGalleryItem>, res: Response<{ name: number }>) {
    const { title } = req.body;
    const newGalleryItem = await db.query(`INSERT INTO gallery (title) values ($1) RETURNING *`, [
      title,
    ]);
    res.json(newGalleryItem);
  }
}

export default new GalleryController();
