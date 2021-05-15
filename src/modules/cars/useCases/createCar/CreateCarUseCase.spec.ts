import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100, // diaria do veiculo
      license_plate: 'ABC-1234', // placa do veículo
      fine_amount: 60, // multa
      brand: 'Brand', // marca do veículo
      category_id: 'category',
    });
  });
});
