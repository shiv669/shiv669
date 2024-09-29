import { registerEnumType } from "@nestjs/graphql";

export enum VoteOptionEnum {
    Approve = "approve",
    Reject = "reject"
}

registerEnumType(VoteOptionEnum, {
    name: "VoteOptionEnum",
  });