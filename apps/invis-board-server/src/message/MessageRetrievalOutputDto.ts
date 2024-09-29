import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("MessageRetrievalOutputDtoObject")
class MessageRetrievalOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    decryptedMessage!: string;
}

export { MessageRetrievalOutputDto as MessageRetrievalOutputDto };