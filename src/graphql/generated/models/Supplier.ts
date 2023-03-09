import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { SupplierCount } from "../resolvers/outputs/SupplierCount";

@TypeGraphQL.ObjectType("Supplier", {
  isAbstract: true
})
export class Supplier {
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

  product?: Product[];

  @TypeGraphQL.Field(_type => SupplierCount, {
    nullable: true
  })
  _count?: SupplierCount | null;
}
