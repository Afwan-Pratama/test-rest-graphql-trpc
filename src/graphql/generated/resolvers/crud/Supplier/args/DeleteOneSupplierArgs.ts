import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierWhereUniqueInput } from "../../../inputs/SupplierWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSupplierArgs {
  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: false
  })
  where!: SupplierWhereUniqueInput;
}
