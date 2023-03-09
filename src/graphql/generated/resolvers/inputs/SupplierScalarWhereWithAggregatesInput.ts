import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SupplierScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SupplierScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SupplierScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SupplierScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SupplierScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SupplierScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SupplierScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SupplierScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;
}
