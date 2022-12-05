import { DataSource } from 'typeorm';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '172.16.0.30',
        port: 3306,
        username: 'leonardo',
        password: '21262811',
        database: 'lmff_ativosDB',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      })
      return dataSource.initialize();
    },
    },
];
