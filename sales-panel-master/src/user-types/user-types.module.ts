import { Module } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesController } from './user-types.controller';
import { DatabaseModule } from 'src/database.module';

@Module({
 imports:[DatabaseModule],
  controllers: [UserTypesController],
  providers: [UserTypesService],
  exports:[UserTypesService]
})
export class UserTypesModule {}
