import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierWhereInput } from "../inputs/SupplierWhereInput";

@TypeGraphQL.InputType("SupplierRelationFilter", {
  isAbstract: true
})
export class SupplierRelationFilter {
  @TypeGraphQL.Field(_type => SupplierWhereInput, {
    nullable: true
  })
  is?: SupplierWhereInput | undefined;

  @TypeGraphQL.Field(_type => SupplierWhereInput, {
    nullable: true
  })
  isNot?: SupplierWhereInput | undefined;
}
