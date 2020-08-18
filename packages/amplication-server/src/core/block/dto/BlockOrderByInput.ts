import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from 'src/enums/SortOrder';

@InputType({
  isAbstract: true,
  description: undefined
})
export class BlockOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof SortOrder | null;

  // appId?: keyof typeof SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  blockType?: keyof typeof SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  displayName?: keyof typeof SortOrder | null;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  description?: keyof typeof SortOrder | null;
}