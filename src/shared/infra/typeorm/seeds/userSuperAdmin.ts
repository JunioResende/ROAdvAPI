import { hash } from 'bcryptjs';
import { v4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = v4();

  const password = await hash('Jj2202526!', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, cpf, rg, organ, age, telephone, email, password, cep, street, number, complement, district, city, uf, "userSuperAdmin", "userAdmin", biography, created_at, updated_at)
      values('${id}', 'Junio Resende de Oliveira', '037.244.971-99', '5430447', 'SSP/GO', 30, '(64)999966878', 'junioresende23@gmail.com', '${password}',  '75832-034', '8', '00', 'Quadra 7 Lote 9', 'Martins', 'Mineiros', 'GO', true, true, 'Super Admin', 'now()', 'now()')
    `,
  );

  await connection.close;
}

create().then(() => console.log('Super User Admin created!'));
