//express
import express from "express";
import http from "http";
//rest
import { restRouter } from "./rest";
//trpc
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc/trpc";
import { productRouter } from "./trpc/router/products";
import { createContext } from "./trpc/context";
//graphql
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { buildSchema } from "type-graphql";
import { resolvers } from "./graphql/generated";
import { prisma } from "./db";
//measurement
import { measurement } from "./measurement";

const app = express();

const httpServer = http.createServer(app);

const appRouter = trpcRouter({
  product: productRouter,
});

app.use((req, res, next) => {
  measurement();
  next();
});

async function main() {
  app.use("/api", restRouter);

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const serverGraphQL = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await serverGraphQL.start();

  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(serverGraphQL, {
      context: async () => ({ prisma }),
    })
  );

  await new Promise(() => httpServer.listen({ port: 4000 }));
}
main();
