-- CreateTable
CREATE TABLE "DealerProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "yardName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "description" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "DealerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DealerProfile_userId_key" ON "DealerProfile"("userId");
