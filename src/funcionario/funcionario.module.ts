import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { FuncionarioController } from './funcionario.controller';
import { funcionarioProviders } from './funcionario.providers';
import { FuncionarioService } from './funcionario.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [FuncionarioController],
  providers: [...funcionarioProviders, FuncionarioService],
  exports: [FuncionarioService]
})
export class FuncionarioModule {}