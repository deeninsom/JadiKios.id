import { Injectable, type OnModuleInit } from "@nestjs/common";
// import {  } from "@prisma/client";
import { PrismaClient } from "generated/prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect();
  }
}
