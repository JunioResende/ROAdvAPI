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

import { Users } from '@modules/accounts/infra/typeorm/entities/Users';

@Entity('posts')
class Posts {
  @PrimaryColumn()
  id: string;

  @Column()
  postTitle: string;

  @Column()
  posting: string;

  @Column()
  featuredImage: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'userID' })
  users: Users;

  @Column()
  userID: string;

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

export { Posts };
