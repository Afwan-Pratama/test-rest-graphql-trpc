import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierCreateInput } from "../../../inputs/SupplierCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSupplierArgs {
  @TypeGraphQL.Field(_type => SupplierCreateInput, {
    nullable: false
  })
  data!: SupplierCreateInput;
}
