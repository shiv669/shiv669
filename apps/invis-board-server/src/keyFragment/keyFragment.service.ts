import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeyFragmentServiceBase } from "./base/keyFragment.service.base";

@Injectable()
export class KeyFragmentService extends KeyFragmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
