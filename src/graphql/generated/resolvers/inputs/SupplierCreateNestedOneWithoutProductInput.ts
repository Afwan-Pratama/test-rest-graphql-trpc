import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierCreateOrConnectWithoutProductInput } from "../inputs/SupplierCreateOrConnectWithoutProductInput";
import { SupplierCreateWithoutProductInput } from "../inputs/SupplierCreateWithoutProductInput";
import { SupplierWhereUniqueInput } from "../inputs/SupplierWhereUniqueInput";

@TypeGraphQL.InputType("SupplierCreateNestedOneWithoutProductInput", {
  isAbstract: true
})
export class SupplierCreateNestedOneWithoutProductInput {
  @TypeGraphQL.Field(_type => SupplierCreateWithoutProductInput, {
    nullable: true
  })
  create?: SupplierCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => SupplierCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: SupplierCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: true
  })
  connect?: SupplierWhereUniqueInput | undefined;
}
