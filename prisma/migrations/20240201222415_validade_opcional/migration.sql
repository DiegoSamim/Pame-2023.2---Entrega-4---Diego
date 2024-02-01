-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Encomenda_de_Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_entrada" INTEGER NOT NULL,
    "id_funcionario" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data_de_validade" DATETIME,
    CONSTRAINT "Encomenda_de_Ingrediente_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Encomenda_de_Ingrediente_id_entrada_fkey" FOREIGN KEY ("id_entrada") REFERENCES "Entrada_de_Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Encomenda_de_Ingrediente" ("data_de_validade", "id", "id_entrada", "id_funcionario", "status") SELECT "data_de_validade", "id", "id_entrada", "id_funcionario", "status" FROM "Encomenda_de_Ingrediente";
DROP TABLE "Encomenda_de_Ingrediente";
ALTER TABLE "new_Encomenda_de_Ingrediente" RENAME TO "Encomenda_de_Ingrediente";
CREATE UNIQUE INDEX "Encomenda_de_Ingrediente_id_key" ON "Encomenda_de_Ingrediente"("id");
CREATE UNIQUE INDEX "Encomenda_de_Ingrediente_id_entrada_key" ON "Encomenda_de_Ingrediente"("id_entrada");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
