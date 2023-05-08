import { Test, TestingModule } from '@nestjs/testing';
import { PostCreationService } from './post-creation.service';

describe('PostCreationService', () => {
  let service: PostCreationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostCreationService],
    }).compile();

    service = module.get<PostCreationService>(PostCreationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
