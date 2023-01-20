/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @ApiProperty({ example: 20 })
    @PrimaryGeneratedColumn()
    id: number;

  @ApiProperty({ example: 'ROCK_STAR' }) 
    @Column()
    name: string;
    


}
