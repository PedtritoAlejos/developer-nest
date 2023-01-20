/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity,OneToOne,JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Perfil {
  @ApiProperty({ example: 20 })
    @PrimaryGeneratedColumn()
    id: number;

  @ApiProperty({ example: 'Rock Star' }) 
    @Column()
    name: string;
    

  @ApiProperty({ example: 'El primero que vamos a ver es el Rock star, la gran mayoría de los que estáis leyendo este post seréis developers lo que implica que tenéis linkedin y estoy seguro al 100% de que os ha llegado el típico mensaje de los recruiters que dice “buscamos un rock star”, o estamos montando un grupo de “rock stars”. En mi opinión hay muy pocos “rockstar” de verdad por ahí, y se cuentan con cuentagotas. ' }) 
   @Column({ length: 9000 })
   description: string;

  @ApiProperty({example:200})
   @Column()
    value:number 

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category




}
