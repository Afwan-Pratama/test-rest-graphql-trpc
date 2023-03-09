import { trpcRouter, publicProcedure } from "../trpc";

export const productRouter = trpcRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany();
  }),
});
