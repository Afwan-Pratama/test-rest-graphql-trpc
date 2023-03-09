import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SupplierUpdateManyMutationInput } from "../../../inputs/SupplierUpdateManyMutationInput";
import { SupplierWhereInput } from "../../../inputs/SupplierWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySupplierArgs {
  @TypeGraphQL.Field(_type => SupplierUpdateManyMutationInput, {
    nullable: false
  })
  data!: SupplierUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SupplierWhereInput, {
    nullable: true
  })
  where?: SupplierWhereInput | undefined;
}
