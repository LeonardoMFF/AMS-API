import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HistoricoController } from './historico.controller';
import { historicoProviders } from './historico.providers';
import { HistoricoService } from './historico.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HistoricoController],
  providers: [...historicoProviders, HistoricoService],
})
export class HistoricoModule {}