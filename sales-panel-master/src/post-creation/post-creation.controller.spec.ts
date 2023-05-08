import { Test, TestingModule } from '@nestjs/testing';
import { PostCreationController } from './post-creation.controller';
import { PostCreationService } from './post-creation.service';

describe('PostCreationController', () => {
  let controller: PostCreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostCreationController],
      providers: [PostCreationService],
    }).compile();

    controller = module.get<PostCreationController>(PostCreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
