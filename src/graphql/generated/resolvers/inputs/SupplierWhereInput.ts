import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SupplierWhereInput", {
  isAbstract: true
})
export class SupplierWhereInput {
  @TypeGraphQL.Field(_type => [SupplierWhereInput], {
    nullable: true
  })
  AND?: SupplierWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SupplierWhereInput], {
    nullable: true
  })
  OR?: SupplierWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SupplierWhereInput], {
    nullable: true
  })
  NOT?: SupplierWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  product?: ProductListRelationFilter | undefined;
}
