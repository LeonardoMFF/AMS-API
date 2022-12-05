import { Funcionario } from 'src/funcionario/funcionario.entity';
import { Ativo } from 'src/ativo/ativo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { join } from 'path/posix';

@Entity()
export class Historico {
  @PrimaryGeneratedColumn()
  idHistorico: number;

  @Column({name: "idFuncionario"})
  Funcionario_idFuncionario: number;

  @Column({name: "idAtivo"})
  Ativo_idAtivo: number;

  @Column({ type: 'timestamp' })
  data: Date;

  @ManyToOne(type => Funcionario, funcionario => funcionario.historico)
  @JoinColumn()
  funcionario: Funcionario;

  @ManyToOne(type => Ativo, ativo => ativo.historico)
  @JoinColumn()
  ativo: Ativo;
}