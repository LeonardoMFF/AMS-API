import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AtivoModule } from './ativo/ativo.module';
import { HistoricoModule } from './historico/historico.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AtivoModule, HistoricoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
