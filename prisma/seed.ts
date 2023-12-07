import * as fs from 'fs';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function main() {
    // Initiate base database
    const reset_database = fs.readFileSync('./prisma/sql/base_db/reset_database.sql', 'utf-8')
    await prisma.$executeRawUnsafe(reset_database)

    const initiate_tables = fs.readFileSync('./prisma/sql/base_db/initiate_tables.sql', 'utf-8')
    await prisma.$executeRawUnsafe(initiate_tables)
}

main()