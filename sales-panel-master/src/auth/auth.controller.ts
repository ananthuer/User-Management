

import { LocalAuthGuard } from './local-auth.guard';

import { Controller, Get, Request, Post, UseGuards, Body, ValidationPipe, Response } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';





@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Request() req) {

    return req.user;
  }
 


}
