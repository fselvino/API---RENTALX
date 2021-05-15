import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    category_id,
    brand,
    fine_amount,
    license_plate,
    daily_rate,
    description,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      name,
      category_id,
      brand,
      fine_amount,
      license_plate,
      daily_rate,
      description,
    });
    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };
