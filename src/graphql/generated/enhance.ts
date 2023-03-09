import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Supplier: crudResolvers.SupplierCrudResolver,
  Product: crudResolvers.ProductCrudResolver
};
const actionResolversMap = {
  Supplier: {
    aggregateSupplier: actionResolvers.AggregateSupplierResolver,
    createManySupplier: actionResolvers.CreateManySupplierResolver,
    createOneSupplier: actionResolvers.CreateOneSupplierResolver,
    deleteManySupplier: actionResolvers.DeleteManySupplierResolver,
    deleteOneSupplier: actionResolvers.DeleteOneSupplierResolver,
    findFirstSupplier: actionResolvers.FindFirstSupplierResolver,
    findFirstSupplierOrThrow: actionResolvers.FindFirstSupplierOrThrowResolver,
    suppliers: actionResolvers.FindManySupplierResolver,
    supplier: actionResolvers.FindUniqueSupplierResolver,
    getSupplier: actionResolvers.FindUniqueSupplierOrThrowResolver,
    groupBySupplier: actionResolvers.GroupBySupplierResolver,
    updateManySupplier: actionResolvers.UpdateManySupplierResolver,
    updateOneSupplier: actionResolvers.UpdateOneSupplierResolver,
    upsertOneSupplier: actionResolvers.UpsertOneSupplierResolver
  },
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver
  }
};
const crudResolversInfo = {
  Supplier: ["aggregateSupplier", "createManySupplier", "createOneSupplier", "deleteManySupplier", "deleteOneSupplier", "findFirstSupplier", "findFirstSupplierOrThrow", "suppliers", "supplier", "getSupplier", "groupBySupplier", "updateManySupplier", "updateOneSupplier", "upsertOneSupplier"],
  Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"]
};
const argsInfo = {
  AggregateSupplierArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySupplierArgs: ["data", "skipDuplicates"],
  CreateOneSupplierArgs: ["data"],
  DeleteManySupplierArgs: ["where"],
  DeleteOneSupplierArgs: ["where"],
  FindFirstSupplierArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSupplierOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySupplierArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSupplierArgs: ["where"],
  FindUniqueSupplierOrThrowArgs: ["where"],
  GroupBySupplierArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySupplierArgs: ["data", "where"],
  UpdateOneSupplierArgs: ["data", "where"],
  UpsertOneSupplierArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  CreateOneProductArgs: ["data"],
  DeleteManyProductArgs: ["where"],
  DeleteOneProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductArgs: ["where"],
  FindUniqueProductOrThrowArgs: ["where"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductArgs: ["data", "where"],
  UpdateOneProductArgs: ["data", "where"],
  UpsertOneProductArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Supplier: relationResolvers.SupplierRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver
};
const relationResolversInfo = {
  Supplier: ["product"],
  Product: ["supplier"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { "_all": MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Supplier: ["id", "name", "description", "address"],
  Product: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateSupplier: ["_count", "_min", "_max"],
  SupplierGroupBy: ["id", "name", "description", "address", "_count", "_min", "_max"],
  AggregateProduct: ["_count", "_min", "_max"],
  ProductGroupBy: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  SupplierCount: ["product"],
  SupplierCountAggregate: ["id", "name", "description", "address", "_all"],
  SupplierMinAggregate: ["id", "name", "description", "address"],
  SupplierMaxAggregate: ["id", "name", "description", "address"],
  ProductCountAggregate: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt", "_all"],
  ProductMinAggregate: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  ProductMaxAggregate: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  SupplierWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "address", "product"],
  SupplierOrderByWithRelationInput: ["id", "name", "description", "address", "product"],
  SupplierWhereUniqueInput: ["id"],
  SupplierOrderByWithAggregationInput: ["id", "name", "description", "address", "_count", "_max", "_min"],
  SupplierScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "address"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "name", "material", "description", "imageUrl", "price", "supplierId", "supplier", "createdAt"],
  ProductOrderByWithRelationInput: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "supplier", "createdAt"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt", "_count", "_max", "_min"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  SupplierCreateInput: ["id", "name", "description", "address", "product"],
  SupplierUpdateInput: ["id", "name", "description", "address", "product"],
  SupplierCreateManyInput: ["id", "name", "description", "address"],
  SupplierUpdateManyMutationInput: ["id", "name", "description", "address"],
  ProductCreateInput: ["id", "name", "material", "description", "imageUrl", "price", "supplier", "createdAt"],
  ProductUpdateInput: ["id", "name", "material", "description", "imageUrl", "price", "supplier", "createdAt"],
  ProductCreateManyInput: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  ProductUpdateManyMutationInput: ["id", "name", "material", "description", "imageUrl", "price", "createdAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ProductListRelationFilter: ["every", "some", "none"],
  ProductOrderByRelationAggregateInput: ["_count"],
  SupplierCountOrderByAggregateInput: ["id", "name", "description", "address"],
  SupplierMaxOrderByAggregateInput: ["id", "name", "description", "address"],
  SupplierMinOrderByAggregateInput: ["id", "name", "description", "address"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  SupplierRelationFilter: ["is", "isNot"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProductCountOrderByAggregateInput: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  ProductMaxOrderByAggregateInput: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  ProductMinOrderByAggregateInput: ["id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ProductCreateNestedManyWithoutSupplierInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  ProductUpdateManyWithoutSupplierNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SupplierCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
  SupplierUpdateOneRequiredWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ProductCreateWithoutSupplierInput: ["id", "name", "material", "description", "imageUrl", "price", "createdAt"],
  ProductCreateOrConnectWithoutSupplierInput: ["where", "create"],
  ProductCreateManySupplierInputEnvelope: ["data", "skipDuplicates"],
  ProductUpsertWithWhereUniqueWithoutSupplierInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutSupplierInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutSupplierInput: ["where", "data"],
  ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "material", "description", "imageUrl", "price", "supplierId", "createdAt"],
  SupplierCreateWithoutProductInput: ["id", "name", "description", "address"],
  SupplierCreateOrConnectWithoutProductInput: ["where", "create"],
  SupplierUpsertWithoutProductInput: ["update", "create"],
  SupplierUpdateWithoutProductInput: ["id", "name", "description", "address"],
  ProductCreateManySupplierInput: ["id", "name", "material", "description", "imageUrl", "price", "createdAt"],
  ProductUpdateWithoutSupplierInput: ["id", "name", "material", "description", "imageUrl", "price", "createdAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

