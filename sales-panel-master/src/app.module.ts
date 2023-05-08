import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTypesModule } from './user-types/user-types.module';
import { UserRolesModule } from './user-roles/user-roles.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express/multer';
import { join } from 'path';
import { PostCreationModule } from './post-creation/post-creation.module';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [UserTypesModule, UserRolesModule, AuthModule, MulterModule.registerAsync({
    useFactory: () => ({
      dest: './images',
    }),
    
  }) ,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'images'),
    serveRoot: '/images'
  }),
  PostCreationModule
 ],
  controllers: [AppController],
  providers: [AppService,JwtService ],
})
export class AppModule {}
