import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implemetations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  // nome que sera chamado
  'CategoriesRepository',
  // Categoria a ser injetada
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  // nome que sera chamado
  'SpecificationsRepository',
  // Categoria a ser injetada
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
