import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'

export class CreateUserTypeDto {
    @IsString()
    @ApiProperty()
    readonly username: string;
    @IsString()
    @ApiProperty()
    readonly password: string;
    @IsString()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @ApiProperty()
    readonly userRoleId: string;

    @IsString()
    @ApiProperty()
    readonly is_Admin: boolean;

    @IsString()
    @ApiProperty()
    readonly description: string;
}
