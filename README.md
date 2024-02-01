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
- [ ] Criação das entidades (resource)
- [ ] Criação das rotas (Controller)
- [ ] Desenvolvimento do banco de dados (Service)
- [ ] Validação
- [ ] Autenticação


## Banco de dados e Relações

![Alt text](image.png)

### Entidades

- [x] Funcionario
- [x] Fornecedor
- [x] Entrada_de_Produto (Ainda não funcional)
- [ ] Encomenda_de_Ingrediente
- [ ] Saida_de_Produto
- [ ] Produto
- [ ] Estoque
- [x] Categoria

### Relações

...

## Rotas e Funções

- Gerenciamento dos Funcionario
  - **Cadastrar Funcionario**
    - Descrição:
    - Post: http://localhost:3000/funcionario
  - **Consultar Funcionarios**
    - Descrição:
    - Get: http://localhost:3000/funcionario ou http://localhost:3000/funcionario/{id}
  - **Atualizar dados do Funcionario**
    - Descrição:
    - Patch: http://localhost:3000/funcionario/{id}
  - **Deletar dados do Funcionario**
    - Descrição:
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
    - Descrição:
    - Post Produto:
    - Get Produto:
    - Patch Produto:
    - Delete Produto:

- Gerenciamento de Categorias
  - **Cadastrar, Consultar, Atualizar, Deletar uma categoria**
    - Descrição:
    - Post Categoria: http://localhost:3000/categoria
    - Get Categoria: http://localhost:3000/categoria ou http://localhost:3000/categoria/{id}
    - Patch Categoria: http://localhost:3000/categoria/{id}
    - Delete Categoria: http://localhost:3000/categoria/{id}

- Gerenciamento de Fornecedores:
  - **Cadastrar, Consultar, Atualizar, Deletar uma Fornecedor**
    - Descrição:
    - Post: http://localhost:3000/fornecedor
    - Get: http://localhost:3000/fornecedor ou http://localhost:3000/fornecedor/{id}
    - Patch: http://localhost:3000/fornecedor/{id}
    - Delete: http://localhost:3000/fornecedor/{id}

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
