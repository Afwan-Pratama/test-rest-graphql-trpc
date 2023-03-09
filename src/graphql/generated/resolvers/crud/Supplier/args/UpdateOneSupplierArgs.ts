import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierUpdateInput } from "../../../inputs/SupplierUpdateInput";
import { SupplierWhereUniqueInput } from "../../../inputs/SupplierWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSupplierArgs {
  @TypeGraphQL.Field(_type => SupplierUpdateInput, {
    nullable: false
  })
  data!: SupplierUpdateInput;

  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: false
  })
  where!: SupplierWhereUniqueInput;
}
