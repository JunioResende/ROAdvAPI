import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid';

import { Posts } from './Posts';

@Entity('imagesOfThePosts')
class ImagesOfThePosts {
  @PrimaryColumn()
  id?: string;

  @Column()
  imagesOfThePosts: string;

  @ManyToOne(() => Posts)
  @JoinColumn({ name: 'post_id' })
  posts: Posts;

  @Column()
  post_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { ImagesOfThePosts };
