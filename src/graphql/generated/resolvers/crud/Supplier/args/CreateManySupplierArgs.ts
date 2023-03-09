import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierCreateManyInput } from "../../../inputs/SupplierCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySupplierArgs {
  @TypeGraphQL.Field(_type => [SupplierCreateManyInput], {
    nullable: false
  })
  data!: SupplierCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
