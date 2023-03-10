import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductCreateInput } from "../../../inputs/ProductCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProductArgs {
  @TypeGraphQL.Field(_type => ProductCreateInput, {
    nullable: false
  })
  data!: ProductCreateInput;
}
