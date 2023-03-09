import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSupplierInput } from "../inputs/ProductCreateWithoutSupplierInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutSupplierInput", {
  isAbstract: true
})
export class ProductCreateOrConnectWithoutSupplierInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSupplierInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSupplierInput;
}
