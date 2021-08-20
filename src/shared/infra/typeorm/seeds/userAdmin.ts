import { hash } from 'bcryptjs';
import { v4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = v4();

  const password = await hash('123456', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, cpf, rg, organ, age, email, password, telephone, cep, street, number, complement, district, city, uf, "userSuperAdmin", "userAdmin", biography, created_at, updated_at)
      values('${id}', 'User', '001.001.001-01', '0101001', 'SSP/GO', 99, 'user@email.com', '${password}',  '(01)010101-0101', '010001-01', '8', '01', 'Quadra 7 Lote 9', 'Martins', 'Mineiros', 'GO', false, true, 'User Admin', 'now()', 'now()')
    `,
  );

  await connection.close;
}

create().then(() => console.log('User Admin created!'));
