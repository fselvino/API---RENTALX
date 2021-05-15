# Cadastro de veículo
**RF**  Requesitos funcionais
[ ] Deve ser possível cadastrar um novo veículo.
[ ] Deve ser possível listar todas as categorias.


**RNF**  Requesitos não funcionais


**RN**  Regras de negócios
[ ] Não deve ser possível cadastrar um carro com uma placa existente.
[ ] Não deve ser possível alterar uma placa de um carro já cadastrado.
[ ] O veículo deve ser cadastrado por padrão com disponibilidade.
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem do Veículo
**RF**  Requesitos funcionais
[ ] Deve ser possível listar todos veículos disponiveis.
[ ] Deve ser possível listar todos os veículos pelo nome da categoria.
[ ] Deve ser possível listar todos os veículos pelo nome da marca.
[ ] Deve ser possível listar todos os veículos pelo nome do veículo.

**RN**  Regras de negócios
[ ] O usuário não precisa estar logado no sistema para navegar no sistema



# Cadastro de Especificação do veículo
**RF**  Requesitos funcionais
[ ] Deve ser possível cadastrar um especificação para um veículo.
[ ] Deve ser possível listar todas especificações.
[ ] Deve ser possível listar todos os veículos

**RN**  Regras de negócios
[ ] Não deve ser possível cadastrar uma especificação para um veículo não cadastrado.
[ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo veículo.
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do veículo

**RF**  Requesitos funcionais
[ ] Deve ser possível cadastrar a imagem do veículo.
[ ] Deve ser possível listar todos os veículos.

**RNF**  Requesitos não funcionais
[ ] Utilizar o multer para upload dos arquivos.

**RN**  Regras de negócios
[ ] O Usuário deve poder cadastrar mais de uma imagem para o mesmo veículo.
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.



# Aluguel de Veículos

**RF**  Requesitos funcionais
[ ] Deve ser possível cadastrar um aluguel

**RN**  Regras de negócios
 [ ] O aluguel deve ter duração mínima de 24 horas.
 [ ] Não deve ser possível caso já exista um aluguel para o mesmo usuário.
 [ ] Não deve ser possível caso já exista um aluguel para o mesmo carro.
