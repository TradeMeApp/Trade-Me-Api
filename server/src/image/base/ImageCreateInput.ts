/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ImageCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  alt?: string | null;

  @ApiProperty({
    required: true,
    type: () => ListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ListingWhereUniqueInput)
  @Field(() => ListingWhereUniqueInput)
  listing!: ListingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  order!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}

export { ImageCreateInput as ImageCreateInput };
