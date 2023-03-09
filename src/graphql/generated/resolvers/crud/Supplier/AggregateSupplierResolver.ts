import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSupplierArgs } from "./args/AggregateSupplierArgs";
import { Supplier } from "../../../models/Supplier";
import { AggregateSupplier } from "../../outputs/AggregateSupplier";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Supplier)
export class AggregateSupplierResolver {
  @TypeGraphQL.Query(_returns => AggregateSupplier, {
    nullable: false
  })
  async aggregateSupplier(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSupplierArgs): Promise<AggregateSupplier> {
    return getPrismaFromContext(ctx).supplier.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
