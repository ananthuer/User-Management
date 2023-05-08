import { PartialType } from '@nestjs/swagger';
import { CreatePostCreationDto } from './create-post-creation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'


export class UpdatePostCreationDto extends PartialType(CreatePostCreationDto) {
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    readonly description: string;

}
