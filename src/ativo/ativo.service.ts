import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ativo } from './ativo.entity';
import { ativoProviders } from './ativos.providers';
import { AtivoListarDto } from './dto/ativo.listar.dto';

@Injectable()
export class AtivoService {
  constructor(
    @Inject('ATIVO_REPOSITORY')
    private AtivoRepository: Repository<Ativo>,
  ) {}

  async listar(): Promise<Ativo[]> {
    return this.AtivoRepository.find();
  }
  
  async findByAmbiente(data: AtivoListarDto): Promise<Ativo[] | undefined> {
    //console.log(data.ambiente)
    return this.AtivoRepository.query('SELECT * FROM ativo WHERE ambiente like "%' + "diretoria" + '%";');
  }
}
