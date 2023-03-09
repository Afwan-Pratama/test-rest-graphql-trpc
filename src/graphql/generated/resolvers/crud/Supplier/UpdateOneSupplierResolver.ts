import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSupplierArgs } from "./args/UpdateOneSupplierArgs";
import { Supplier } from "../../../models/Supplier";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Supplier)
export class UpdateOneSupplierResolver {
  @TypeGraphQL.Mutation(_returns => Supplier, {
    nullable: true
  })
  async updateOneSupplier(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSupplierArgs): Promise<Supplier | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).supplier.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
