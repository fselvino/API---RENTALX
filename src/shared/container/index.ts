import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  // nome que sera chamado
  'CategoriesRepository',
  // Categoria a ser injetada
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<CarsRepository>('CarsRepository', CarsRepository);
