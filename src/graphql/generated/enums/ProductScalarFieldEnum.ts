import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  name = "name",
  material = "material",
  description = "description",
  imageUrl = "imageUrl",
  price = "price",
  supplierId = "supplierId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
