import express, { Request, Response } from "express";
import vehicleRoutes from "./vehicle";
import receiptRoutes from "./receipt";
import itemsRoutes from "./items";
import customerRoutes from "./customer";
import carmodelRoutes from "./carmodel";
import carcolorRoutes from "./carcolor";
import carbrandRoutes from "./carbrand";
import { name, version } from "../../package.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    name,
    version,
  })
);

router.use("/vehicle", vehicleRoutes);
router.use("/receipt", receiptRoutes);
router.use("/items", itemsRoutes);
router.use("/customer", customerRoutes);
router.use("/carmodel", carmodelRoutes);
router.use("/carcolor", carcolorRoutes);
router.use("/carbrand", carbrandRoutes);

export default router;
