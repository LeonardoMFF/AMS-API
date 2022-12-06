import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post('listarPorAmbiente')
  async listarPorAmbiente(@Body() data): Promise<AtivoListarDto> {
    console.log("Back01: ");
    console.log(data);
    return this.ativoService.findByAmbiente(data)
  }
}
