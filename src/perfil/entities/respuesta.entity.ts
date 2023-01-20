/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn ,ManyToMany,JoinTable} from 'typeorm';
import { Pregunta } from './pregunta.entity';

@Entity()
export class Respuesta {
  @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;
    

  @ApiProperty({ example: 'Me gusta investigar tecnologías emergentes por dicha curiosidad' }) 
   @Column({ length: 9000 })
   respuesta: string;


   @ManyToMany(() => Pregunta)
   @JoinTable()
   preguntas: Pregunta[]



}
