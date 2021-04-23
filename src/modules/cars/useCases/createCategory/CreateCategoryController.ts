import { Request, Response } from 'express';

import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  categoriesRepository = new CategoriesRepository();

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
