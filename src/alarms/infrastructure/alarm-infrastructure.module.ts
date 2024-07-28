import { Module } from '@nestjs/common';
import { InMemoryPersistenceModule } from './in-memory/in-memory-persistence.module';
import { OrmPersistenceModule } from './persistence/ORM/orm-persistence.module';

@Module({})
export class AlarmInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver === 'orm' ? OrmPersistenceModule : InMemoryPersistenceModule;

    return {
      module: AlarmInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
