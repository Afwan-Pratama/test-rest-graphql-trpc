import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManySupplierInputEnvelope } from "../inputs/ProductCreateManySupplierInputEnvelope";
import { ProductCreateOrConnectWithoutSupplierInput } from "../inputs/ProductCreateOrConnectWithoutSupplierInput";
import { ProductCreateWithoutSupplierInput } from "../inputs/ProductCreateWithoutSupplierInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutSupplierInput } from "../inputs/ProductUpdateManyWithWhereWithoutSupplierInput";
import { ProductUpdateWithWhereUniqueWithoutSupplierInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutSupplierInput";
import { ProductUpsertWithWhereUniqueWithoutSupplierInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutSupplierInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutSupplierNestedInput", {
  isAbstract: true
})
export class ProductUpdateManyWithoutSupplierNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutSupplierInput], {
    nullable: true
  })
  create?: ProductCreateWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutSupplierInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutSupplierInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManySupplierInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManySupplierInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutSupplierInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutSupplierInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
