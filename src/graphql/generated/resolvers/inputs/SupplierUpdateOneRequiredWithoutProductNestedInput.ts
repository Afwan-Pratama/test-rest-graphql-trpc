import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierCreateOrConnectWithoutProductInput } from "../inputs/SupplierCreateOrConnectWithoutProductInput";
import { SupplierCreateWithoutProductInput } from "../inputs/SupplierCreateWithoutProductInput";
import { SupplierUpdateWithoutProductInput } from "../inputs/SupplierUpdateWithoutProductInput";
import { SupplierUpsertWithoutProductInput } from "../inputs/SupplierUpsertWithoutProductInput";
import { SupplierWhereUniqueInput } from "../inputs/SupplierWhereUniqueInput";

@TypeGraphQL.InputType("SupplierUpdateOneRequiredWithoutProductNestedInput", {
  isAbstract: true
})
export class SupplierUpdateOneRequiredWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => SupplierCreateWithoutProductInput, {
    nullable: true
  })
  create?: SupplierCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => SupplierCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: SupplierCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => SupplierUpsertWithoutProductInput, {
    nullable: true
  })
  upsert?: SupplierUpsertWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: true
  })
  connect?: SupplierWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SupplierUpdateWithoutProductInput, {
    nullable: true
  })
  update?: SupplierUpdateWithoutProductInput | undefined;
}
