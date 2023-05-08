import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'

export class CreateUserRoleDto {
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    readonly description: string;

}
