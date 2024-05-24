import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../users/schemas/user.schema";
import { Model } from "mongoose";
import { Log } from "./schemas/logs.schema";
import { LogsDto } from "./dtos/logs.dto";

@Injectable()
export class LogsService {
  constructor(@InjectModel(User.name) private logModel: Model<Log>) {}

  create(log: LogsDto) {
    this.logModel.create(log);
  }

  findAll() {
    return this.logModel.find().exec();
  }
}
