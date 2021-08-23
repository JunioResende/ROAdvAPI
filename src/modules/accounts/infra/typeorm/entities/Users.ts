import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  organ: string;

  @Column()
  age: number;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  userSuperAdmin: boolean;

  @Column()
  userAdmin: boolean;

  @Column()
  biography: string;

  @Column()
  avatar: string;

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

export { Users };
