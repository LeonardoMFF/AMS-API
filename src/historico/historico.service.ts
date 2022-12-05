import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
//import { HistoricoCadastrarDto } from './dto/historico.cadastrar.dto';
import { Historico } from './historico.entity';

@Injectable()
export class HistoricoService {
  constructor(
    @Inject('HISTORICO_REPOSITORY')
    private historicoRepository: Repository<Historico>,
  ) {}

  async listar(): Promise<Historico[]> {
    return this.historicoRepository.find();
  }

  /*async cadastrar(data: HistoricoCadastrarDto): Promise<ResultadoDto> {
    let historico = new Historico()
    historico.idFuncionario = data.idFuncionario
    historico.idAtivo = data.idAtivo
    historico.data = data.data
    return this.historicoRepository.save(historico)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Registro adicionado ao histórico"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Ocorreu um erro ao adicionar o registro"
      }
    })
  }*/ 
}
