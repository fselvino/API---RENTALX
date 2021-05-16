import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connetion = await createConnection('localhost');

  const id = uuidv4();
  const password = await hash('admin', 8);
  await connetion.query(`INSERT INTO USERS(id, name, email, password, driver_license, "isAdmin", created_at)
  values('${id}', 'admin', 'admin@rentx.com.br', '${password}', '123456', 'true', 'now()' ) 
  `);
  await connetion.close;
}

create().then(() => console.log('User admin created!'));
