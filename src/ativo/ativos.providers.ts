import { Connection } from 'typeorm';
import { Ativo } from './ativo.entity';

export const ativoProviders = [
  {
    provide: 'ATIVO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Ativo),
    inject: ['DATABASE_CONNECTION'],
  },
];