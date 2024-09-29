import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KeyFragmentResolverBase } from "./base/keyFragment.resolver.base";
import { KeyFragment } from "./base/KeyFragment";
import { KeyFragmentService } from "./keyFragment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KeyFragment)
export class KeyFragmentResolver extends KeyFragmentResolverBase {
  constructor(
    protected readonly service: KeyFragmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
