import * as TypeGraphQL from "type-graphql";

export enum SupplierScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  address = "address"
}
TypeGraphQL.registerEnumType(SupplierScalarFieldEnum, {
  name: "SupplierScalarFieldEnum",
  description: undefined,
});
