import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Product } from "../../../models/Product";
import { Supplier } from "../../../models/Supplier";
import { SupplierProductArgs } from "./args/SupplierProductArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Supplier)
export class SupplierRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async product(@TypeGraphQL.Root() supplier: Supplier, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SupplierProductArgs): Promise<Product[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).supplier.findUnique({
      where: {
        id: supplier.id,
      },
    }).product({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
