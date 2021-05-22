import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppErrors';

interface IRequest {
  car_id: string;
  specification_id: string[];
}

// @injectable()
class CreateCarSpecificationUseCase {
  constructor(
    // @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}
  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);
    if (!carExists) {
      throw new AppError('Car does not exists');
    }
  }
}

export { CreateCarSpecificationUseCase };
