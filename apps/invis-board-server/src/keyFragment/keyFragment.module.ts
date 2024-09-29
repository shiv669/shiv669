import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KeyFragmentModuleBase } from "./base/keyFragment.module.base";
import { KeyFragmentService } from "./keyFragment.service";
import { KeyFragmentController } from "./keyFragment.controller";
import { KeyFragmentResolver } from "./keyFragment.resolver";

@Module({
  imports: [KeyFragmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [KeyFragmentController],
  providers: [KeyFragmentService, KeyFragmentResolver],
  exports: [KeyFragmentService],
})
export class KeyFragmentModule {}
