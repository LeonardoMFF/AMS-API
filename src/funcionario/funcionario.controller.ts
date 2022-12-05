import { Body, Controller, Delete, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { FuncionarioCadastrarDto } from './dto/funcionario.cadastrar.dto';
import { Funcionario } from './funcionario.entity';
import { FuncionarioService } from './funcionario.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('funcionario')
export class FuncionarioController {
  constructor(
    private readonly funcionarioService: FuncionarioService,
    private authService: AuthService) {}

  @Get('listar')
  async listar(): Promise<Funcionario[]> {
    return this.funcionarioService.listar();
  }

  @Post('cadastrar')
  async cadastrar(
    @Body() data: FuncionarioCadastrarDto,
  ): Promise<ResultadoDto> {
    return this.funcionarioService.cadastrar(data);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
