interface ICreateUserDto {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  organ: string;
  birthDate: string;
  age: number;
  email: string;
  password: string;
  userSuperAdmin: boolean;
  userAdmin: boolean;
  biography: string;
  avatar: string;
}

export { ICreateUserDto };
