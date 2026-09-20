-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "DG_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "price_D" BIGINT NOT NULL,
    "image" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_DG_id_key" ON "Product"("DG_id");
