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
- [ ] Imports do Prisma
- [ ] Criação das entidades (resource)
- [ ] Criação das rotas (Controller)
- [ ] Desenvolvimento do banco de dados (Service)
- [ ] Testagem


## Banco de dados e Relações

![Alt text](image.png)

### Entidades



### Relações

...

## Rotas e Funções

- Gerenciamento dos Funcionario
  - **Cadastrar Funcionario**
    - Descrição:
    - Post Funcionario:
  - **Consultar Funcionarios**
    - Descrição:
    - Get Funcionario:
  - **Atualizar dados do Funcionario**
    - Descrição:
    - Patch Funcionario:
  - **Deletar dados do Funcionario**
    - Descrição:
    - Delete Funcionario:

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
    - Descrição:
    - Post Produto:
    - Get Produto:
    - Patch Produto:
    - Delete Produto:

- Gerenciamento de Categorias
  - **Cadastrar, Consultar, Atualizar, Deletar uma categoria**
    - Descrição:
    - Post Categoria:
    - Get Categoria:
    - Patch Categoria:
    - Delete Categoria:

- Gerenciamento de Fornecedores:
  - **Cadastrar, Consultar, Atualizar, Deletar uma Fornecedor**
    - Descrição:
    - Post Fornecedor:
    - Get Categoria:
    - Patch Categoria:
    - Delete Categoria:

- Gerenciamento do Estoque:
  - **Cadastrar, Consultar, Atualizar, Deletar Estoque**
    - Descrição:
    - Post Estoque:
    - Get Estoque:
    - Patch Estoque:
    - Delete Estoque:

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
