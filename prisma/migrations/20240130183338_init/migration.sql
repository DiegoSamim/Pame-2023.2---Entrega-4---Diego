-- CreateTable
CREATE TABLE "Funcionario" (
    "id_funcionario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_id_funcionario_key" ON "Funcionario"("id_funcionario");
