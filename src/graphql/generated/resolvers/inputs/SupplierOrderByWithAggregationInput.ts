import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierCountOrderByAggregateInput } from "../inputs/SupplierCountOrderByAggregateInput";
import { SupplierMaxOrderByAggregateInput } from "../inputs/SupplierMaxOrderByAggregateInput";
import { SupplierMinOrderByAggregateInput } from "../inputs/SupplierMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SupplierOrderByWithAggregationInput", {
  isAbstract: true
})
export class SupplierOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SupplierCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SupplierCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SupplierMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SupplierMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SupplierMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SupplierMinOrderByAggregateInput | undefined;
}
