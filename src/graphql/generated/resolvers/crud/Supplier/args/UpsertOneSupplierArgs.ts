import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierCreateInput } from "../../../inputs/SupplierCreateInput";
import { SupplierUpdateInput } from "../../../inputs/SupplierUpdateInput";
import { SupplierWhereUniqueInput } from "../../../inputs/SupplierWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSupplierArgs {
  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: false
  })
  where!: SupplierWhereUniqueInput;

  @TypeGraphQL.Field(_type => SupplierCreateInput, {
    nullable: false
  })
  create!: SupplierCreateInput;

  @TypeGraphQL.Field(_type => SupplierUpdateInput, {
    nullable: false
  })
  update!: SupplierUpdateInput;
}
