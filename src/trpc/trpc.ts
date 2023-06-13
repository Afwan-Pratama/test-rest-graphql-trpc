import { initTRPC } from "@trpc/server";
import type { Context } from "./context";

import { productRouter } from "./router/products";

export const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;

export const trpcRouter = t.router;
