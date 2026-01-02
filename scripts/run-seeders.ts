import 'reflect-metadata';
import { AppDataSource } from '../src/db/data-source';
import { seedReferences } from '../src/db/seeders/ReferenceSeeder';
import { seedCore } from '../src/db/seeders/CoreSeeder';
import { seedDomain } from '../src/db/seeders/DomainSeeder';
import { ApprovalSeeder } from '../src/db/seeders/ApprovalSeeder';

async function runSeeders() {
    try {
        console.log('Initializing DataSource for seeding...');
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }

        console.log('Starting Seeding Process...');
        await AppDataSource.synchronize(true);

        // 1. References (Static Data)
        await seedReferences(AppDataSource);

        // 2. Core (Roles, Permissions, Users)
        await seedCore(AppDataSource);

        // 2b. Approval Config
        await ApprovalSeeder.seed();

        // 3. Domain (Sample Data)
        await seedDomain(AppDataSource);

        console.log('Seeding Complete!');
        process.exit(0);
    } catch (error) {
        console.error('Seeding Failed:', error);
        process.exit(1);
    }
}

runSeeders();
