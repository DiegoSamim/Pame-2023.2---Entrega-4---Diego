/*
  Warnings:

  - You are about to drop the `IngredienteEmEstoque` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredienteEncomendado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProdutoEmEstoque` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegistrodeEstoque` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "IngredienteEmEstoque_id_key";

-- DropIndex
DROP INDEX "IngredienteEncomendado_id_key";

-- DropIndex
DROP INDEX "ProdutoEmEstoque_id_key";

-- DropIndex
DROP INDEX "RegistrodeEstoque_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "IngredienteEmEstoque";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "IngredienteEncomendado";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProdutoEmEstoque";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RegistrodeEstoque";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_fornecedor" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Entrada_de_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "id_fornecedor" INTEGER NOT NULL,
    "id_funcionario" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor_total_entrada" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "Entrada_de_Produto_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Entrada_de_Produto_id_fornecedor_fkey" FOREIGN KEY ("id_fornecedor") REFERENCES "Fornecedor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Entrada_de_Produto_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Encomenda_de_Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_entrada" INTEGER NOT NULL,
    "id_funcionario" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data_de_validade" DATETIME NOT NULL,
    CONSTRAINT "Encomenda_de_Ingrediente_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Encomenda_de_Ingrediente_id_entrada_fkey" FOREIGN KEY ("id_entrada") REFERENCES "Entrada_de_Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Saida_de_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_funcionario" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "Saida_de_Produto_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Saida_de_Produto_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_categoria" INTEGER NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_produto" INTEGER NOT NULL,
    CONSTRAINT "Produto_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "Estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo_categoria" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" TEXT NOT NULL
);
INSERT INTO "new_Funcionario" ("cargo", "id", "nome") SELECT "cargo", "id", "nome" FROM "Funcionario";
DROP TABLE "Funcionario";
ALTER TABLE "new_Funcionario" RENAME TO "Funcionario";
CREATE UNIQUE INDEX "Funcionario_id_key" ON "Funcionario"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_id_key" ON "Fornecedor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Entrada_de_Produto_id_key" ON "Entrada_de_Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Encomenda_de_Ingrediente_id_key" ON "Encomenda_de_Ingrediente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Saida_de_Produto_id_key" ON "Saida_de_Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Estoque_id_key" ON "Estoque"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_id_key" ON "Categoria"("id");
