import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManySupplierInputEnvelope } from "../inputs/ProductCreateManySupplierInputEnvelope";
import { ProductCreateOrConnectWithoutSupplierInput } from "../inputs/ProductCreateOrConnectWithoutSupplierInput";
import { ProductCreateWithoutSupplierInput } from "../inputs/ProductCreateWithoutSupplierInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutSupplierInput", {
  isAbstract: true
})
export class ProductCreateNestedManyWithoutSupplierInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutSupplierInput], {
    nullable: true
  })
  create?: ProductCreateWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutSupplierInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManySupplierInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManySupplierInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
