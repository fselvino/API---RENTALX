import { AppError } from '@errors/AppErrors';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadExists = await this.usersRepository.findByEmail(email);

    if (userAlreadExists) {
      throw new AppError('User already exists!');
    }

    // Cria uma senha criptografada
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
