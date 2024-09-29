import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("MessageFragmentationOutputDtoObject")
class MessageFragmentationOutputDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    fragmentIds!: string;
}

export { MessageFragmentationOutputDto as MessageFragmentationOutputDto };