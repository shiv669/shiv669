import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NodeModuleBase } from "./base/node.module.base";
import { NodeService } from "./node.service";
import { NodeController } from "./node.controller";
import { NodeResolver } from "./node.resolver";

@Module({
  imports: [NodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [NodeController],
  providers: [NodeService, NodeResolver],
  exports: [NodeService],
})
export class NodeModule {}
