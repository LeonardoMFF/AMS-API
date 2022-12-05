import { Body, Controller, Get, Post, UnsupportedMediaTypeException } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
//import { HistoricoCadastrarDto } from './dto/historico.cadastrar.dto';
import { Historico } from './historico.entity';
import { HistoricoService } from './historico.service';

@Controller('historico')
export class HistoricoController {
  constructor(private readonly historicoService: HistoricoService) {}

  @Get('listar')
  async listar(): Promise<Historico[]> {
    return this.historicoService.listar();
  }

  /*@Post('cadastrar')
  async cadastrar(
    @Body() data: HistoricoCadastrarDto,
  ): Promise<ResultadoDto> {
    return this.historicoService.cadastrar(data);
  }*/
}
