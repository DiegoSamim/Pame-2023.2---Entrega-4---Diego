/*
  Warnings:

  - The primary key for the `Funcionario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `id_funcionario` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Funcionario` table. All the data in the column will be lost.
  - Added the required column `id` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ProdutoEmEstoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_do_produto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "quantidade_em_estoque" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "IngredienteEmEstoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_de_validade" DATETIME NOT NULL,
    "quantidade_em_estoque" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "RegistrodeEstoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_funcionario" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "tipo_de_transacao" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "RegistrodeEstoque_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RegistrodeEstoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "ProdutoEmEstoque" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IngredienteEncomendado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_funcionario" INTEGER NOT NULL,
    "id_ingrediente" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "IngredienteEncomendado_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IngredienteEncomendado_id_ingrediente_fkey" FOREIGN KEY ("id_ingrediente") REFERENCES "IngredienteEmEstoque" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargo" TEXT NOT NULL
);
INSERT INTO "new_Funcionario" ("cargo", "nome") SELECT "cargo", "nome" FROM "Funcionario";
DROP TABLE "Funcionario";
ALTER TABLE "new_Funcionario" RENAME TO "Funcionario";
CREATE UNIQUE INDEX "Funcionario_id_key" ON "Funcionario"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ProdutoEmEstoque_id_key" ON "ProdutoEmEstoque"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IngredienteEmEstoque_id_key" ON "IngredienteEmEstoque"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RegistrodeEstoque_id_key" ON "RegistrodeEstoque"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IngredienteEncomendado_id_key" ON "IngredienteEncomendado"("id");
