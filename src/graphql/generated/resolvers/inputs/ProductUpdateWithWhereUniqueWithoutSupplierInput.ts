import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutSupplierInput } from "../inputs/ProductUpdateWithoutSupplierInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutSupplierInput", {
  isAbstract: true
})
export class ProductUpdateWithWhereUniqueWithoutSupplierInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutSupplierInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutSupplierInput;
}
