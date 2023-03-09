import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierWhereInput } from "../../../inputs/SupplierWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySupplierArgs {
  @TypeGraphQL.Field(_type => SupplierWhereInput, {
    nullable: true
  })
  where?: SupplierWhereInput | undefined;
}
