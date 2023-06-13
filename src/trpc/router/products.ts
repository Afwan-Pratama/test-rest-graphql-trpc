import { z } from "zod";
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
  getAllRelationWithLimit: publicProcedure.input(z.number()).query(({ input, ctx }) => {
    return ctx.db.product.findMany({
      take: input,
      include: {
        supplier: {
          select: {
            name: true,
            description: true,
            address: true,
          }
        }
      }
    })
  })
  getAllWithLimit: publicProcedure.input(z.number()).query(({ input, ctx }) => {
    return ctx.db.product.findMany({
      take: input,
    });
  }),

  // addSupplier: publicProcedure
  //   .input(
  //     z.array(
  //       z.object({
  //         name: z.string(),
  //         description: z.string(),
  //         address: z.string(),
  //       })
  //     )
  //   )
  //   .mutation(({ input, ctx }) => {
  //     return ctx.db.supplier.createMany({
  //       data: input,
  //     });
  //   }),
  // addProduct: publicProcedure
  //   .input(
  //     z.array(
  //       z.object({
  //         name: z.string(),
  //         material: z.string(),
  //         description: z.string(),
  //         imageUrl: z.string(),
  //         price: z.string(),
  //         supplierId: z.string(),
  //       })
  //     )
  //   )
  //   .mutation(({ input, ctx }) => {
  //     return ctx.db.product.createMany({
  //       data: input,
  //     });
  //   }),
});
