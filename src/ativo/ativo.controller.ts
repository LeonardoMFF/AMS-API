import { Body, Controller, Get } from '@nestjs/common';
import { Ativo } from './ativo.entity';
import { AtivoService } from './ativo.service';
import { AtivoListarDto } from './dto/ativo.listar.dto';

@Controller('ativo')
export class AtivoController {
  constructor(private readonly ativoService: AtivoService) {}

  @Get('listar')
  async listar(): Promise<Ativo[]> {
    return this.ativoService.listar();
  }

  @Get('listarPorAmbiente')
  async listarPorAmbiente(
    @Body() data: AtivoListarDto,
  ): Promise<Ativo[]> {
    return this.ativoService.findByAmbiente(data)
  }
}
