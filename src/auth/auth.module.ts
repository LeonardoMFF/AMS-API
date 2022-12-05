import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FuncionarioModule } from 'src/funcionario/funcionario.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.startegy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [FuncionarioModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [AuthService , LocalStrategy, JwtStrategy],
  exports:[JwtModule, AuthService]
})
export class AuthModule {}
