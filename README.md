# Cadastro de veículo
**RF**  Requesitos funcionais <br />
[x] Deve ser possível cadastrar um novo veículo.<br />



**RNF**  Requesitos não funcionais<br />


**RN**  Regras de negócios<br />
[x] Não deve ser possível cadastrar um carro com uma placa existente.<br />
[x] O veículo deve ser cadastrado por padrão com disponibilidade.<br />
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />


# Listagem do Veículo
**RF**  Requesitos funcionais<br />
[ ] Deve ser possível listar todos veículos disponiveis.<br />
[ ] Deve ser possível listar todos os veículos pelo nome da categoria.<br />
[ ] Deve ser possível listar todos os veículos pelo nome da marca.<br />
[ ] Deve ser possível listar todos os veículos pelo nome do veículo.<br />

**RN**  Regras de negócios<br />
[ ] O usuário não precisa estar logado no sistema para navegar no sistema.<br />



# Cadastro de Especificação do veículo
**RF**  Requesitos funcionais.<br />
[ ] Deve ser possível cadastrar um especificação para um veículo.<br />
[ ] Deve ser possível listar todas especificações.<br />
[ ] Deve ser possível listar todos os veículos.<br />

**RN**  Regras de negócios<br />
[ ] Não deve ser possível cadastrar uma especificação para um veículo não cadastrado.<br />
[ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo veículo.<br />
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />


# Cadastro de imagens do veículo

**RF**  Requesitos funcionais<br />
[ ] Deve ser possível cadastrar a imagem do veículo.<br />
[ ] Deve ser possível listar todos os veículos.<br />

**RNF**  Requesitos não funcionais.<br />
[ ] Utilizar o multer para upload dos arquivos.<br />

**RN**  Regras de negócios<br />
[ ] O Usuário deve poder cadastrar mais de uma imagem para o mesmo veículo.<br />
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />



# Aluguel de Veículos

**RF**  Requesitos funcionais<br />
[ ] Deve ser possível cadastrar um aluguel.<br />

**RN**  Regras de negócios<br />
 [ ] O aluguel deve ter duração mínima de 24 horas.<br />
 [ ] Não deve ser possível caso já exista um aluguel para o mesmo usuário.<br />
 [ ] Não deve ser possível caso já exista um aluguel para o mesmo carro.<br />
