import express from "express";
import { create, detail, list, remove, update } from "../actions/carmodel";

const router = express.Router();

router.get("", list);
router.get("/:id", detail);
router.post("", create);
router.put("/remove/:id", remove);
router.put("/:id", update);

export default router;
