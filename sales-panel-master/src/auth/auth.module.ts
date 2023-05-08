import { Module } from '@nestjs/common';

import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';


import { IsValidPasswordConstraint } from './password-decorator';
import { UserTypesModule } from 'src/user-types/user-types.module';
import { AuthService } from './auth.service';


@Module({
  imports: [
    
    UserTypesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, IsValidPasswordConstraint, AuthModule],
 
  controllers: [AuthController],
  exports:[AuthModule]
})
export class AuthModule {}