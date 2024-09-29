import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GovernanceVotingOutputDtoObject")
class GovernanceVotingOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    transactionId!: string;
}

export { GovernanceVotingOutputDto as GovernanceVotingOutputDto };