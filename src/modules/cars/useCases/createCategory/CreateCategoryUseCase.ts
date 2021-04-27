import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppErrors';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;

  description: string;
}

/**

 * [x] - Definir o tipo de retorno

 * [x] - Alterar o retorno do erro

 * [x] - Acessar o repositorio

 */
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadExists) {
      throw new AppError('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
