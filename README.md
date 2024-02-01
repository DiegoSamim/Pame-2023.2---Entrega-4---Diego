# Objetivo

Márcia deseja ter um melhor controle sobre o estoque e a produção de cookies. Ela
solicitou à Fluxo o desenvolvimento de um Sistema Web, no qual os funcionários cadastrados
pudessem registrar a entrada e saída de produtos do estoque. O sistema também deve permitir que
os funcionários interajam com uma checklist que informe quais ingredientes já foram encomendados
para as próximas produções e acompanhar seus status.

## Desenvolvimento

- [x] Modelagem do Banco de dados
- [x] Criação do Arquitetura Nest
- [x] Instalação do Prisma
- [x] Desenvolvimento do Schema
- [x] Imports do Prisma
- [x] Criação das entidades (resource)
- [x] Criação das rotas (Controller)
- [x] Desenvolvimento do banco de dados (Service)
- [ ] Validação
- [ ] Autenticação


## Banco de dados e Relações

![alt text](<Modelagem do banco de dados Doce Mordida.png>)

### Entidades

- [x] **Funcionario**
  - id: number; nome: string; telefone: string; email: string; senha: string; cargo: string;
- [x] **Fornecedor**
  - id: number; nome_fornecedor: string; endereco: string; telefone: string; email: string;
- [x] **Entrada_de_Produto**
  - id: number; id_produto: number; id_fornecedor: number; id_funcionario: number; data: Date; valor_total_entrada: number; quantidade: number;
- [x] **Encomenda_de_Ingrediente**
  - id: number; id_entrada: number; id_funcionario: number; status: string; data_de_validade: Date;
- [x] **Saida_de_Produto**
  - id: number; id_funcionario: number; id_produto: number; data: Date; quantidade: number;
- [x] **Produto**
  - id: number; id_categoria: number; nome_produto: string; descricao: string; valor_produto: number;
- [x] **Estoque**
  - id: number; id_produto: number; quantidade: number;
- [x] **Categoria**
  - id: number; tipo_categoria: string;

### Relações


## Rotas e Funções

- Gerenciamento dos Funcionario
  - **Cadastrar Funcionario**
    - Descrição: Endpoint para cadastrar um novo funcionário no sistema.
    - Post: http://localhost:3000/funcionario
    - **Json Exemplo: {"nome": "Joao", "telefone": "11987654321", "email": "joao.silva@example.com", "senha": "senha123" "cargo": "Gerente"}**
  - **Consultar Funcionarios**
    - Descrição: endpoint para consultar a lista de funcionários cadastrados ou obter informações de um funcionário específico por meio do seu ID.
    - Get: http://localhost:3000/funcionario ou http://localhost:3000/funcionario/{id}
  - **Atualizar dados do Funcionario**
    - Descrição: endpoint para atualizar os dados de um funcionário existente com base no seu ID.
    - Patch: http://localhost:3000/funcionario/{id}
    - **Json Exemplo: {"nome": "João"}**
  - **Deletar dados do Funcionario**
    - Descrição: endpoint para excluir os dados de um funcionário do sistema com base no seu ID.
    - Delete: http://localhost:3000/funcionario/{id}

- Registro do Fluxo de Estoque:
  - **(Funcionario) Registrar entrada de produto**
    - Descrição:
    - Post Entrada de Produto: 
  - **(Funcionario) Registrar saída de produto**
    - Descrição:
    - Post Saída de Produto:
  - **Consultar, atualizar, Deletar Registros**
    - Descrição:
    - Get Entrada/Saída de Produto:
    - Patch Entrada/Saída de Produto:
    - Delete Entrada/Saída de Produto:

- Gerenciamento de Produtos
  - **Cadastrar, Consultar, Atualizar, Deletar Produtos**
    - Descrição: Gerenciamento sobre o banco de dados Produtos
    - Post: http://localhost:3000/produto
    - Get: http://localhost:3000/produto ou http://localhost:3000/produto/{id}
    - Patch: http://localhost:3000/produto/{id}
    - Delete: http://localhost:3000/produto/{id}
    - **Json Exemplo: {"id_categoria": 1, "nome_produto": "Açucar - 1 Kg", "descricao": "Pacote de Açucar de 1kg", "valor_produto": 4.20}**

- Gerenciamento de Categorias
  - **Cadastrar, Consultar, Atualizar, Deletar uma categoria**
    - Descrição:
    - Post Categoria: http://localhost:3000/categoria
    - Get Categoria: http://localhost:3000/categoria ou http://localhost:3000/categoria/{id}
    - Patch Categoria: http://localhost:3000/categoria/{id}
    - Delete Categoria: http://localhost:3000/categoria/{id}
    - **Json Exemplo: {"tipo_categoria": "Ingrediente"}**

- Gerenciamento de Fornecedores:
  - **Cadastrar, Consultar, Atualizar, Deletar uma Fornecedor**
    - Descrição:
    - Post: http://localhost:3000/fornecedor
    - Get: http://localhost:3000/fornecedor ou http://localhost:3000/fornecedor/{id}
    - Patch: http://localhost:3000/fornecedor/{id}
    - Delete: http://localhost:3000/fornecedor/{id}
    - **Json Exemplo: {"nome_fornecedor": "Fornecedor A", "endereco": "Rua XYZ, 123", "telefone": "(11) 9876-5432", "email": "fornecedor@example.com"}**

- Gerenciamento do Estoque:
  - **Cadastrar, Consultar, Atualizar, Deletar Estoque**
    - Descrição:
    - Post: http://localhost:3000/estoque
    - Get: http://localhost:3000/estoque ou http://localhost:3000/estoque/{id}
    - Patch: http://localhost:3000/estoque/{id}
    - Delete: http://localhost:3000/estoque/{id}
    - **Json Exemplo: {"id_produto": 123, "quantidade": 50}**

- Encomenda dos Ingredientes:
  - **Registrar um ingrediente encomendado** 
    - Descrição: Após a entrada de um produto (compra), o funcionario registra no banco de dados Encomeda de Ingredientes com base no id_entrada. O status inicial é 'pendente'.
    - Post Encomeda de Ingredientes:
  - **Retornar todas as encomendas de ingredientes**
    - Descrição:
    - Get Encomenda de Ingredientes:
  - **Atualizar Status da encomenda**
    - Descrição: Atualiza o status da encomenda para **"Em transporte"** ou **"Entregue"**
    - Patch Encomenda de Ingredientes:
