import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSupplierArgs } from "./args/DeleteOneSupplierArgs";
import { Supplier } from "../../../models/Supplier";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Supplier)
export class DeleteOneSupplierResolver {
  @TypeGraphQL.Mutation(_returns => Supplier, {
    nullable: true
  })
  async deleteOneSupplier(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSupplierArgs): Promise<Supplier | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).supplier.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
