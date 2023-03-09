import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierCreateWithoutProductInput } from "../inputs/SupplierCreateWithoutProductInput";
import { SupplierUpdateWithoutProductInput } from "../inputs/SupplierUpdateWithoutProductInput";

@TypeGraphQL.InputType("SupplierUpsertWithoutProductInput", {
  isAbstract: true
})
export class SupplierUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => SupplierUpdateWithoutProductInput, {
    nullable: false
  })
  update!: SupplierUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => SupplierCreateWithoutProductInput, {
    nullable: false
  })
  create!: SupplierCreateWithoutProductInput;
}
