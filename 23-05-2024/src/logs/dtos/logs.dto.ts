import { IsNotEmpty, IsString } from "class-validator";

export class LogsDto {
  @IsString()
  @IsNotEmpty()
  statusCode: string;

  @IsString()
  @IsNotEmpty()
  method: string;

  @IsString()
  @IsNotEmpty()
  route: string;
}
