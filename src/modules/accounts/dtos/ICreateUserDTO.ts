interface ICreateUserDto {
  id?: string;
  name: string;
  cpf: string;
  rg: string;
  organ: string;
  birthDate: string;
  age: number;
  telephone: string;
  email: string;
  password: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  userSuperAdmin?: boolean;
  userAdmin?: boolean;
  biography: string;
  avatar?: string;
}

export { ICreateUserDto };
