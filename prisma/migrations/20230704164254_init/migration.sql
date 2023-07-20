-- CreateTable
CREATE TABLE `Route` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `startCity` VARCHAR(191) NOT NULL,
    `endCity` VARCHAR(191) NOT NULL,
    `distance` DOUBLE NOT NULL,
    `departureDate` DATETIME(3) NOT NULL,
    `completionDate` DATETIME(3) NOT NULL,
    `requiredTransport` VARCHAR(191) NOT NULL,
    `expectedRevenue` INTEGER NOT NULL,
    `transportId` INTEGER NULL,
    `status` ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `licensePlate` VARCHAR(191) NOT NULL,
    `status` ENUM('AVAILABLE', 'BUSY') NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `purchaseDate` DATETIME(3) NOT NULL,
    `mileage` INTEGER NOT NULL,
    `transportType` ENUM('CARGO', 'PASSENGER') NOT NULL,

    UNIQUE INDEX `Transport_licensePlate_key`(`licensePlate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_transportId_fkey` FOREIGN KEY (`transportId`) REFERENCES `Transport`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
