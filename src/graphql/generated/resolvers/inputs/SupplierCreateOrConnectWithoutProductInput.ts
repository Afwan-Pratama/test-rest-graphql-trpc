import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierCreateWithoutProductInput } from "../inputs/SupplierCreateWithoutProductInput";
import { SupplierWhereUniqueInput } from "../inputs/SupplierWhereUniqueInput";

@TypeGraphQL.InputType("SupplierCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class SupplierCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: false
  })
  where!: SupplierWhereUniqueInput;

  @TypeGraphQL.Field(_type => SupplierCreateWithoutProductInput, {
    nullable: false
  })
  create!: SupplierCreateWithoutProductInput;
}
