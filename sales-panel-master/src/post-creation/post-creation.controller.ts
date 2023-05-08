import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { PostCreationService } from './post-creation.service';
import { CreatePostCreationDto } from './dto/create-post-creation.dto';
import { UpdatePostCreationDto } from './dto/update-post-creation.dto';
import { ApiBody, ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { imageFileInterceptor } from 'src/file-upload.utils';

@Controller('post-creation')
@ApiTags('Post Creation')

export class PostCreationController {
  constructor(private readonly postCreationService: PostCreationService) {}

  @Post()
  @ApiSecurity('x-access-token')
  @UseGuards( JwtAuthGuard)
  create(@Request() req ,@Body() createPostCreationDto: CreatePostCreationDto) {
    return this.postCreationService.create(req.user.id, createPostCreationDto);
  }

  @Get()
  findAll() {
    return this.postCreationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postCreationService.findOne(+id);
  }

  @Patch(':id')
  @ApiSecurity('x-access-token')
  @UseGuards( JwtAuthGuard)
  update(@Param('id') id: string, @Body() updatePostCreationDto: UpdatePostCreationDto,@Request() req) {
    return this.postCreationService.update(+id, updatePostCreationDto, req.user.id);
  }

  @Delete(':id')
  @ApiSecurity('x-access-token')
  @UseGuards( JwtAuthGuard)
  remove(@Param('id') id: string,@Request() req) {
    return this.postCreationService.remove(+id, req.user.id);
  }

  @Post(':id/image')
  @ApiSecurity('x-access-token')
  @UseGuards( JwtAuthGuard)
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
  })) file:Express.Multer.File,@Request() req){

    return this.postCreationService.addImage(+id, file.path, req.user.id);
  }

}
