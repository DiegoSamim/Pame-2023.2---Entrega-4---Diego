/*
  Warnings:

  - A unique constraint covering the columns `[id_entrada]` on the table `Encomenda_de_Ingrediente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Encomenda_de_Ingrediente_id_entrada_key" ON "Encomenda_de_Ingrediente"("id_entrada");
