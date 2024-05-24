import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Log {
  @Prop({ required: true })
  statusCode: string;

  @Prop({ required: true })
  method: string;

  @Prop()
  route: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
