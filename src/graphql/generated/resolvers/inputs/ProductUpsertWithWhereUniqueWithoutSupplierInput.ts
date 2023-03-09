import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSupplierInput } from "../inputs/ProductCreateWithoutSupplierInput";
import { ProductUpdateWithoutSupplierInput } from "../inputs/ProductUpdateWithoutSupplierInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutSupplierInput", {
  isAbstract: true
})
export class ProductUpsertWithWhereUniqueWithoutSupplierInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutSupplierInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutSupplierInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSupplierInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSupplierInput;
}
