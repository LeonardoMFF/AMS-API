import { Connection } from 'typeorm';
import { Historico } from './historico.entity';

export const historicoProviders = [
  {
    provide: 'HISTORICO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Historico),
    inject: ['DATABASE_CONNECTION'],
  },
];