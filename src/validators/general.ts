import { IsInt, IsNotEmpty, IsOptional, IsUUID, Min } from "class-validator";

export class GetUserRequest {
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}

export class GetResourceRequest {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class PaginationRequest {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  page: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit = 10;
}

export class GetResourcesPaginatedRequest extends PaginationRequest {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class EmptyInputRequest {}