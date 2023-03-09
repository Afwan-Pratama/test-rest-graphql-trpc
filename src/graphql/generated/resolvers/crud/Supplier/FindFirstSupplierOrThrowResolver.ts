import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSupplierOrThrowArgs } from "./args/FindFirstSupplierOrThrowArgs";
import { Supplier } from "../../../models/Supplier";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Supplier)
export class FindFirstSupplierOrThrowResolver {
  @TypeGraphQL.Query(_returns => Supplier, {
    nullable: true
  })
  async findFirstSupplierOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSupplierOrThrowArgs): Promise<Supplier | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).supplier.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
