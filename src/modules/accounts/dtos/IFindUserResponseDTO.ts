interface IFindUserResponseDTO {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  organ: string;
  age: number;
  telephone: string;
  email: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  userSuperAdmin: boolean;
  userAdmin: boolean;
  biography: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

export { IFindUserResponseDTO };
