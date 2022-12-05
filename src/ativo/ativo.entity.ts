import { Historico } from 'src/historico/historico.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Ativo {
  @PrimaryGeneratedColumn()
  idAtivo: number;

  @Column({ length: 255 })
  descricao: string;

  @Column()
  n_invent: number;

  @Column()
  localizacao: number;

  @Column({ length: 45 })
  ambiente: string;

  @OneToMany(type => Historico, historico => historico.ativo)
  historico: Historico
}