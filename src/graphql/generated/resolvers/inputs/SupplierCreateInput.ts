import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutSupplierInput } from "../inputs/ProductCreateNestedManyWithoutSupplierInput";

@TypeGraphQL.InputType("SupplierCreateInput", {
  isAbstract: true
})
export class SupplierCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutSupplierInput, {
    nullable: true
  })
  product?: ProductCreateNestedManyWithoutSupplierInput | undefined;
}
