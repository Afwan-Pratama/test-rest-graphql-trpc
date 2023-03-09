import express from "express";
import { prisma } from "../db";

export const restRouter = express.Router();

restRouter.get("/products", async (req, res) => {
  const data = await prisma.product.findMany();
  res.json(data);
});

restRouter.get("/products/supplier", async (req, res) => {
  const data = await prisma.product.findMany({
    include: {
      supplier: {
        select: {
          name: true,
          description: true,
          address: true,
        },
      },
    },
  });
  res.json(data);
});
