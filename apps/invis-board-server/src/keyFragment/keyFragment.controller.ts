import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KeyFragmentService } from "./keyFragment.service";
import { KeyFragmentControllerBase } from "./base/keyFragment.controller.base";

@swagger.ApiTags("keyFragments")
@common.Controller("keyFragments")
export class KeyFragmentController extends KeyFragmentControllerBase {
  constructor(
    protected readonly service: KeyFragmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
