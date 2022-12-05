import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Historico } from 'src/historico/historico.entity';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  idFuncionario: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  nif: number;

  @Column({ length: 30 })
  senha: string;

  @Column()
  ativo: boolean;

  @Column({ length: 20 })
  email: string;

  @OneToMany(type => Historico, historico => historico.funcionario)
  historico: Historico
}