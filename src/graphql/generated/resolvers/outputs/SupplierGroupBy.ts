import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SupplierCountAggregate } from "../outputs/SupplierCountAggregate";
import { SupplierMaxAggregate } from "../outputs/SupplierMaxAggregate";
import { SupplierMinAggregate } from "../outputs/SupplierMinAggregate";

@TypeGraphQL.ObjectType("SupplierGroupBy", {
  isAbstract: true
})
export class SupplierGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => SupplierCountAggregate, {
    nullable: true
  })
  _count!: SupplierCountAggregate | null;

  @TypeGraphQL.Field(_type => SupplierMinAggregate, {
    nullable: true
  })
  _min!: SupplierMinAggregate | null;

  @TypeGraphQL.Field(_type => SupplierMaxAggregate, {
    nullable: true
  })
  _max!: SupplierMaxAggregate | null;
}
