import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManySupplierInput } from "../inputs/ProductCreateManySupplierInput";

@TypeGraphQL.InputType("ProductCreateManySupplierInputEnvelope", {
  isAbstract: true
})
export class ProductCreateManySupplierInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManySupplierInput], {
    nullable: false
  })
  data!: ProductCreateManySupplierInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
