import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { FuncionarioCadastrarDto } from './dto/funcionario.cadastrar.dto';
import { Funcionario } from './funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @Inject('FUNCIONARIO_REPOSITORY')
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async listar(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async cadastrar(data: FuncionarioCadastrarDto): Promise<ResultadoDto> {
    let funcionario = new Funcionario()
    funcionario.nome = data.nome
    funcionario.nif = data.nif
    funcionario.senha = data.senha
    funcionario.ativo = data.ativo
    funcionario.email = data.email
    return this.funcionarioRepository.save(funcionario)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Funcionário cadastrado com sucesso"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Ocorreu um erro ao cadastrar o funcionário"
      }
    })
  } 

  async findOne(nif: number): Promise<Funcionario | undefined> {
    return this.funcionarioRepository.findOne({where: {nif: nif}});
  }
}
