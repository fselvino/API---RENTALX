import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImprontCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  // Metodo loadCategories le os dados vindo da requesiçao realiza
  // stream dados dados e por meio de promise retorna as categories ou um erro
  loadCategories(file: Express.Multer.File): Promise<IImprontCategory[]> {
    return new Promise((resolver, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImprontCategory[] = [];

      // por padrão csv-parse recebe a virgula como delimitadorg
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          resolver(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async category => {
      const { name, description } = category;
      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
