import { Injectable } from '@nestjs/common';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
      private funcionarioService: FuncionarioService,
      private jwtService: JwtService) {}
    
    async validateFuncionario(nif: number, senha: string): Promise<any> {
        const funcionario = await this.funcionarioService.findOne(nif);
        if (funcionario && funcionario.senha === senha) {
          const { senha, ...result } = funcionario;
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { username: user.username, sub: user.password };
        console.log(user.username, user.password)
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
