import { Module } from '@nestjs/common';
import { PostCreationService } from './post-creation.service';
import { PostCreationController } from './post-creation.controller';

@Module({
  controllers: [PostCreationController],
  providers: [PostCreationService]
})
export class PostCreationModule {}
