-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "DG_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "price_D" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_DG_id_key" ON "Product"("DG_id");
