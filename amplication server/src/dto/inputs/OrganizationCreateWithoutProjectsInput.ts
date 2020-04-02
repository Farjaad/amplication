import { Arg, ArgsType, Field, FieldResolver, Float, ID, InputType, Int, ObjectType, registerEnumType } from "type-graphql";
import { Args, Context, Mutation, Query, ResolveProperty, Resolver, Root } from "@nestjs/graphql";
//import { AccountUserCreateManyWithoutOrganizationInput } from "../inputs/AccountUserCreateManyWithoutOrganizationInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class OrganizationCreateWithoutProjectsInput {

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  defaultTimeZone!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  address!: string;

}
