import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Car despcription',
      daily_rate: 110.0,
      license_plate: 'DEH-1234',
      fine_amount: 40.0,
      brand: 'Car_Brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to lista all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car despcription',
      daily_rate: 110.0,
      license_plate: 'DEH-1234',
      fine_amount: 40.0,
      brand: 'Car_Brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_Brand_test',
    });
    // console.log(cars);
    expect(cars).toEqual([car]);
  });

  it('should be able to lista all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Car despcription',
      daily_rate: 110.0,
      license_plate: 'DEH-1234',
      fine_amount: 40.0,
      brand: 'Car_Brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car4',
    });
    // console.log(cars);
    expect(cars).toEqual([car]);
  });

  it('should be able to lista all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car4',
      description: 'Car despcription',
      daily_rate: 110.0,
      license_plate: 'DEH-1234',
      fine_amount: 40.0,
      brand: 'Car_Brand',
      category_id: '123456',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '1234567',
    });
    // console.log(cars);
    expect(cars).toEqual([car]);
  });
});
