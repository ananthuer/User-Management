
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

// import { postAuthencation } from 'src/utils/sms_utils';
import { CustomerDto } from './dto/authenticate-customer.dto';
import { VerifyDto } from './dto/verify.dto';
import { ChangePasswordDto } from './dto/changePass.dto';

import jwt from 'jsonwebtoken';
import { jwtConstants } from './constants';
import { IsValidPassword } from './password-decorator';
import { UserTypesService } from 'src/user-types/user-types.service';


@Injectable()
export class AuthService {
  
  constructor(
    private userService: UserTypesService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
  let user = await this.userService.fetchUserByEmailOrPhone(username);





  
  if (user && await bcrypt.compare(pass, user.password)) {
    const payload = { id: user.id, roles: user.userRoleId.split(",").map((e) => parseInt(e))};
    return {
      access_token: this.jwtService.sign(payload),
     
    };
  }


  
    return null;
} 

 


  
}