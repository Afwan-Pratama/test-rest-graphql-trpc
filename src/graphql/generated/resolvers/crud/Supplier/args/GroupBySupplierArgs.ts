import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierOrderByWithAggregationInput } from "../../../inputs/SupplierOrderByWithAggregationInput";
import { SupplierScalarWhereWithAggregatesInput } from "../../../inputs/SupplierScalarWhereWithAggregatesInput";
import { SupplierWhereInput } from "../../../inputs/SupplierWhereInput";
import { SupplierScalarFieldEnum } from "../../../../enums/SupplierScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySupplierArgs {
  @TypeGraphQL.Field(_type => SupplierWhereInput, {
    nullable: true
  })
  where?: SupplierWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SupplierOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SupplierOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SupplierScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "address">;

  @TypeGraphQL.Field(_type => SupplierScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SupplierScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
