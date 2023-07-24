import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedPostEntity } from 'src/models/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './controllers/feed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FeedPostEntity])],

  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
