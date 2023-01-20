/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Respuesta } from './respuesta.entity';

@Entity()
export class Pregunta {
  @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;
    

  @ApiProperty({ example: '¿Con que frase te sientes identificado?' }) 
   @Column({ length: 9000 })
   pregunta: string;

   @ManyToMany(type => Respuesta, respuesta => respuesta.id)
   respuestas: Respuesta[];




}
