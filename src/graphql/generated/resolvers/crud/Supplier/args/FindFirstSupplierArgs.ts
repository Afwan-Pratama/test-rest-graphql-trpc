import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierOrderByWithRelationInput } from "../../../inputs/SupplierOrderByWithRelationInput";
import { SupplierWhereInput } from "../../../inputs/SupplierWhereInput";
import { SupplierWhereUniqueInput } from "../../../inputs/SupplierWhereUniqueInput";
import { SupplierScalarFieldEnum } from "../../../../enums/SupplierScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSupplierArgs {
  @TypeGraphQL.Field(_type => SupplierWhereInput, {
    nullable: true
  })
  where?: SupplierWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SupplierOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SupplierOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SupplierWhereUniqueInput, {
    nullable: true
  })
  cursor?: SupplierWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SupplierScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "address"> | undefined;
}
