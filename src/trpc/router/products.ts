import { trpcRouter, publicProcedure } from "../trpc";

export const productRouter = trpcRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany();
  }),
  getAllWithRelation: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
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
  }),
});
