import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ValidationPipe, UploadedFile, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { imageFileInterceptor } from 'src/file-upload.utils';



@Controller('user-types')
@ApiTags('User Types')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypesService) {}

  @Post()
  create(@Body() createUserTypeDto: CreateUserTypeDto) {
    return this.userTypesService.create(createUserTypeDto);
  }

  @Get()
  findAll() {
    return this.userTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTypeDto: UpdateUserTypeDto) {
    return this.userTypesService.update(+id, updateUserTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTypesService.remove(+id);
  }

  @Post(':id/image')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })

  @UseInterceptors(imageFileInterceptor)
  addImage(@Param('id') id: string, @UploadedFile( new ParseFilePipe({
    validators: [
      // new MaxFileSizeValidator({ maxSize: 100000 }),
      new FileTypeValidator({ fileType: 'jpeg'||'png' || 'jpg' }),
    ]
  })) file:Express.Multer.File){

    return this.userTypesService.addImage(+id, file.path);
  }

}
